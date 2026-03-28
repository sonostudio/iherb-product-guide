import os
import anthropic
from models.chat import Message
from config.clients import CLIENT_REGISTRY, DEFAULT_CLIENT

_client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])


def get_client_config():
    """Load the active client config from the CLIENT env variable."""
    client_id = os.environ.get("CLIENT", DEFAULT_CLIENT).lower()
    config = CLIENT_REGISTRY.get(client_id)
    if config is None:
        available = ", ".join(CLIENT_REGISTRY.keys())
        raise ValueError(
            f"Unknown CLIENT='{client_id}'. Available clients: {available}"
        )
    return config


# Load once at module import time (restart server to switch client)
_config = get_client_config()

SYSTEM_PROMPT = _config.system_prompt
_OFFTOPIC_SIGNALS = _config.offtopic_signals


def get_active_client_config():
    """Return the currently active ClientConfig (used by API routes)."""
    return _config


def build_messages(history: list[Message], user_message: str) -> list[dict]:
    """Build the messages list for the Claude API call."""
    messages = []
    for msg in history:
        messages.append({"role": msg.role, "content": msg.content})
    messages.append({"role": "user", "content": user_message})
    return messages


def is_offtopic_response(text: str) -> bool:
    """Detect whether the assistant redirected an off-topic message."""
    lowered = text.lower()
    return any(signal.lower() in lowered for signal in _OFFTOPIC_SIGNALS)


def get_chat_response(history: list[Message], user_message: str) -> tuple[str, bool]:
    """Send a message to Claude and return (response_text, is_offtopic)."""
    messages = build_messages(history, user_message)

    response = _client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=2048,
        system=SYSTEM_PROMPT,
        messages=messages,
    )

    text = response.content[0].text
    return text, is_offtopic_response(text)
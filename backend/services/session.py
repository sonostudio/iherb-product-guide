from models.chat import Message


# In-memory session store: { session_id: [Message, ...] }
_sessions: dict[str, list[Message]] = {}


def get_history(session_id: str) -> list[Message]:
    """Return conversation history for a session."""
    return _sessions.get(session_id, [])


def append_messages(session_id: str, user_msg: str, assistant_msg: str) -> None:
    """Append a user/assistant exchange to session history."""
    if session_id not in _sessions:
        _sessions[session_id] = []

    _sessions[session_id].append(Message(role="user", content=user_msg))
    _sessions[session_id].append(Message(role="assistant", content=assistant_msg))


def delete_session(session_id: str) -> bool:
    """Delete a session. Returns True if it existed."""
    if session_id in _sessions:
        del _sessions[session_id]
        return True
    return False

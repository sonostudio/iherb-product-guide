from datetime import datetime, timezone


# In-memory event log: list of event dicts
# In production this would be written to S3 / Delta Lake Bronze layer
_events: list[dict] = []


def log_message_event(
    session_id: str,
    user_message: str,
    assistant_response: str,
    is_offtopic: bool,
) -> None:
    """Log a chat exchange event for analytics."""
    _events.append({
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "session_id": session_id,
        "user_message": user_message,
        "assistant_response": assistant_response,
        "is_offtopic": is_offtopic,
    })


def get_events() -> list[dict]:
    """Return all logged events (for dashboard/debugging)."""
    return list(_events)


def get_offtopic_events() -> list[dict]:
    """Return only off-topic events."""
    return [e for e in _events if e["is_offtopic"]]
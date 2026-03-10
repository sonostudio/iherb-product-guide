from fastapi import APIRouter, HTTPException
from models.chat import ChatRequest, ChatResponse, HistoryResponse, DeleteResponse
from services import session, llm, event_log

router = APIRouter(prefix="/api/chat", tags=["chat"])


@router.post("", response_model=ChatResponse)
async def send_message(body: ChatRequest):
    """Send a user message and receive an AI response."""
    if not body.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    history = session.get_history(body.session_id)

    try:
        response_text, is_offtopic = llm.get_chat_response(history, body.message)
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"LLM error: {str(e)}")

    session.append_messages(body.session_id, body.message, response_text)
    event_log.log_message_event(body.session_id, body.message, response_text, is_offtopic)

    return ChatResponse(session_id=body.session_id, response=response_text, is_offtopic=is_offtopic)


@router.get("/history/{session_id}", response_model=HistoryResponse)
async def get_history(session_id: str):
    """Retrieve the full conversation history for a session."""
    messages = session.get_history(session_id)
    return HistoryResponse(session_id=session_id, messages=messages)


@router.delete("/history/{session_id}", response_model=DeleteResponse)
async def delete_history(session_id: str):
    """Clear the conversation history for a session."""
    deleted = session.delete_session(session_id)
    return DeleteResponse(session_id=session_id, deleted=deleted)
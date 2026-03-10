from pydantic import BaseModel, Field
from datetime import datetime
from typing import Literal


class Message(BaseModel):
    role: Literal["user", "assistant"]
    content: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class ChatRequest(BaseModel):
    session_id: str
    message: str


class ChatResponse(BaseModel):
    session_id: str
    response: str
    is_offtopic: bool = False
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class HistoryResponse(BaseModel):
    session_id: str
    messages: list[Message]


class DeleteResponse(BaseModel):
    session_id: str
    deleted: bool
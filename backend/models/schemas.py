# backend/models/schemas.py
from pydantic import BaseModel
from typing import List, Literal

class Message(BaseModel):
    role: Literal["user", "assistant"]
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]
    notes_context: str = ""
    mode: Literal["explain", "quiz", "summarise"] = "explain"

class ChatResponse(BaseModel):
    response: str
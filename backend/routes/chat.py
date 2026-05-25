# backend/routes/chat.py
from fastapi import APIRouter, HTTPException
from models.schemas import ChatRequest, ChatResponse
from services.claude_service import get_claude_response

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        response = get_claude_response(
            messages=request.messages,
            notes_context=request.notes_context,
            mode=request.mode
        )
        return ChatResponse(response=response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
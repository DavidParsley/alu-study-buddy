# backend/services/claude_service.py
import os
import anthropic
from dotenv import load_dotenv
from models.schemas import Message
from typing import List

load_dotenv()

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

SYSTEM_PROMPTS = {
    "explain": """You are a friendly and patient study tutor for university students at the African Leadership University (ALU).
Your job is to help students understand their course material deeply.
If the student has provided notes, use them as your primary context.
- Break down complex concepts into simple language
- Use relatable analogies and real world examples
- Always encourage the student, never make them feel stupid
- If a concept has multiple parts, walk through each one step by step
- End your response with one follow-up question to check understanding""",

    "quiz": """You are an engaging study coach for university students at the African Leadership University (ALU).
Your job is to test the student's understanding using their own notes.
If the student has provided notes, generate questions directly from that material.
- Start by generating 3 practice questions based on the notes or topic
- When the student answers, give specific constructive feedback
- Tell them what they got right, and gently correct what they got wrong
- Encourage them to think deeper, not just memorize
- Keep the tone fun and motivating""",

    "summarise": """You are a precise academic assistant for university students at the African Leadership University (ALU).
Your job is to distill notes and readings into clean, memorable summaries.
If the student has provided notes, summarise those specifically.
Structure every summary like this:
- **Key Concepts**: The 3-5 most important ideas
- **Definitions to Remember**: Any important terms and their meanings
- **The Big Picture**: One paragraph explaining how everything connects
- **Quick Recall**: 3 bullet points the student should remember before an exam"""
}

def build_messages(messages: List[Message], notes_context: str) -> list:
    formatted = []

    if notes_context.strip():
        formatted.append({
            "role": "user",
            "content": f"Here are my notes/material for context:\n\n{notes_context}"
        })
        formatted.append({
            "role": "assistant",
            "content": "Got it! I have read through your notes and I am ready to help. What would you like to do?"
        })

    for message in messages:
        formatted.append({
            "role": message.role,
            "content": message.content
        })

    return formatted

def get_claude_response(messages: List[Message], notes_context: str, mode: str) -> str:
    system_prompt = SYSTEM_PROMPTS.get(mode, SYSTEM_PROMPTS["explain"])
    formatted_messages = build_messages(messages, notes_context)
        
    response = client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=1024,
        system=system_prompt,
        messages=formatted_messages
    )

    return response.content[0].text
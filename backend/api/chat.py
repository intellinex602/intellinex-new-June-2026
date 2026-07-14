from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Any
import google.generativeai as genai
from core.config import settings

router = APIRouter()

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]

# Initialize Gemini
if settings.GEMINI_API_KEY:
    genai.configure(api_key=settings.GEMINI_API_KEY)
    model = genai.GenerativeModel('gemini-1.5-flash')
else:
    model = None

system_prompt = """You are an AI assistant for Intellinex Technologies.
Intellinex is a modern IT services company offering:
- Managed IT Services
- Cloud Solutions (AWS, Azure, GCP)
- AI Solutions (Gemini, Custom ML)
- Cybersecurity
- Hardware Solutions
- Custom Software Development

Be helpful, concise, and professional. 
If someone asks about pricing, say we offer custom quotes and they should contact us.
If you don't know the answer, direct them to contact us at Sales.services@intellinex.in or call +91-7065707898.
Keep your responses short as they will be displayed in a small chat widget."""

@router.post("/")
def chat_with_ai(request: ChatRequest):
    if not model:
        # Fallback if no API key is configured
        return {"response": "I'm currently running in offline mode. For assistance, please visit our contact page or call us."}
    
    try:
        # Format history for Gemini
        # Gemini expects history in a specific format, and user messages as the last prompt
        history = []
        for msg in request.messages[:-1]:
            # Map roles: user -> user, assistant -> model
            role = "user" if msg.role == "user" else "model"
            history.append({"role": role, "parts": [msg.content]})
            
        last_message = request.messages[-1].content
        
        # Start a chat session with history
        chat = model.start_chat(history=history)
        
        # Send system prompt context as part of the message if it's the first message
        if len(request.messages) == 1:
            full_prompt = f"{system_prompt}\n\nUser: {last_message}"
        else:
            full_prompt = last_message
            
        response = chat.send_message(full_prompt)
        
        return {"response": response.text}
    except Exception as e:
        print(f"Gemini API Error: {e}")
        raise HTTPException(status_code=500, detail="Failed to communicate with AI service")

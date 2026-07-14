from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from api.contact import router as contact_router
from api.chat import router as chat_router
from db.database import engine, Base

# Create tables (In a real production app, use Alembic migrations instead of this)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Intellinex Technologies API",
    description="Backend API for Intellinex website (Contact Form & AI Chat)",
    version="1.0.0"
)

# CORS configuration
origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://intellinex.tech",
    "https://www.intellinex.tech",
]

# Allow custom Vercel preview domains if needed by using regex or dynamic origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router, prefix="/api/contact", tags=["Contact"])
app.include_router(chat_router, prefix="/api/chat", tags=["Chat"])

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Intellinex API is running"}

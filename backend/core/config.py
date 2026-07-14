from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "Intellinex API"
    
    # Database
    DATABASE_URL: str = "postgresql+psycopg://postgres:postgres@localhost:5432/intellinex"
    
    # Resend API
    RESEND_API_KEY: Optional[str] = None
    CONTACT_EMAIL_TO: str = "contact@intellinex.tech"
    
    # Google Gemini API
    GEMINI_API_KEY: Optional[str] = None
    
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()

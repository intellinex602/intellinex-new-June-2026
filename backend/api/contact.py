from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr
from typing import Optional
import resend

from db.database import get_db
from models.models import ContactInquiry
from core.config import settings

router = APIRouter()

resend.api_key = settings.RESEND_API_KEY

class ContactRequest(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    service: Optional[str] = None
    message: str

@router.post("/", status_code=status.HTTP_201_CREATED)
def submit_contact_form(request: ContactRequest, db: Session = Depends(get_db)):
    # 1. Save to Database
    db_inquiry = ContactInquiry(
        first_name=request.firstName,
        last_name=request.lastName,
        email=request.email,
        phone=request.phone,
        company=request.company,
        service=request.service,
        message=request.message
    )
    db.add(db_inquiry)
    db.commit()
    db.refresh(db_inquiry)

    # 2. Send Email via Resend
    if settings.RESEND_API_KEY:
        try:
            resend.Emails.send({
                "from": "onboarding@resend.dev", # Using default resend onboarding email for test
                "to": settings.CONTACT_EMAIL_TO,
                "subject": f"New Inquiry from {request.firstName} {request.lastName} - {request.company or 'No Company'}",
                "html": f"""
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> {request.firstName} {request.lastName}</p>
                <p><strong>Email:</strong> {request.email}</p>
                <p><strong>Phone:</strong> {request.phone}</p>
                <p><strong>Company:</strong> {request.company}</p>
                <p><strong>Service of Interest:</strong> {request.service}</p>
                <h3>Message:</h3>
                <p>{request.message}</p>
                """
            })
        except Exception as e:
            # We don't want to fail the whole request if email fails, but log it
            print(f"Failed to send email: {e}")

    return {"status": "success", "message": "Inquiry submitted successfully", "id": db_inquiry.id}

from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class ReviewCreate(BaseModel):
    rating: int = Field(..., ge=1, le=10)
    title: Optional[str] = None
    body: str


class ReviewUpdate(BaseModel):
    rating: Optional[int] = Field(None, ge=1, le=10)
    title: Optional[str] = None
    body: Optional[str] = None


class ReviewRead(BaseModel):
    id: int
    movie_id: int
    user_id: int
    rating: int
    title: Optional[str]
    body: str
    created_at: Optional[datetime]
    updated_at: Optional[datetime]

    class Config:
        from_attributes = True

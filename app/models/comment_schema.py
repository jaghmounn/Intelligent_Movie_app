from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class CommentCreate(BaseModel):
    body: str
    parent_id: Optional[int] = None


class CommentRead(BaseModel):
    id: int
    movie_id: int
    user_id: int
    parent_id: Optional[int]
    body: str
    created_at: Optional[datetime]
    updated_at: Optional[datetime]
    replies: Optional[List["CommentRead"]] = None

    class Config:
        from_attributes = True

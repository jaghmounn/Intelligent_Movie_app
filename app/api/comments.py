from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlalchemy.orm import Session

from app.api.auth import get_current_user, get_db
from app.models.comment_schema import CommentCreate, CommentRead
from app.models.comment import Comment
from app.models.user_schema import UserRead

router = APIRouter(prefix="", tags=["Comments"])  # endpoints mounted at various paths


@router.post("/movies/{movie_id}/comments", response_model=CommentRead)
def post_comment(movie_id: int, payload: CommentCreate, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    comment = Comment(movie_id=movie_id, user_id=current_user.id, parent_id=payload.parent_id, body=payload.body)
    db.add(comment)
    db.commit()
    db.refresh(comment)
    return comment


@router.get("/movies/{movie_id}/comments", response_model=List[CommentRead])
def get_comments(movie_id: int, db: Session = Depends(get_db)):
    return db.query(Comment).filter(Comment.movie_id == movie_id).all()


@router.post("/comments/{comment_id}/reply", response_model=CommentRead)
def reply_comment(comment_id: int, payload: CommentCreate, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    parent = db.query(Comment).filter(Comment.id == comment_id).first()
    if not parent:
        raise HTTPException(status_code=404, detail="Parent comment not found")
    comment = Comment(movie_id=parent.movie_id, user_id=current_user.id, parent_id=comment_id, body=payload.body)
    db.add(comment)
    db.commit()
    db.refresh(comment)
    return comment


@router.put("/comments/{comment_id}")
def edit_comment(comment_id: int, payload: CommentCreate, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    comment = db.query(Comment).filter(Comment.id == comment_id).first()
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found")
    if comment.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not allowed")
    comment.body = payload.body
    db.add(comment)
    db.commit()
    db.refresh(comment)
    return comment


@router.delete("/comments/{comment_id}")
def delete_comment(comment_id: int, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    comment = db.query(Comment).filter(Comment.id == comment_id).first()
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found")
    if comment.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not allowed")
    db.delete(comment)
    db.commit()
    return {"message": "deleted"}

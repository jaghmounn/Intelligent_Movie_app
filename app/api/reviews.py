from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from sqlalchemy.orm import Session

from app.api.auth import get_current_user, get_db
from app.models.review_schema import ReviewCreate, ReviewRead, ReviewUpdate
from app.models.user_schema import UserRead
from app.models.review import Review

router = APIRouter(prefix="", tags=["Reviews"])  # endpoints mounted at various paths


@router.post("/movies/{movie_id}/reviews", response_model=ReviewRead)
def create_review(movie_id: int, payload: ReviewCreate, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    review = Review(movie_id=movie_id, user_id=current_user.id, rating=payload.rating, title=payload.title, body=payload.body)
    db.add(review)
    db.commit()
    db.refresh(review)
    return review


@router.get("/movies/{movie_id}/reviews", response_model=List[ReviewRead])
def list_reviews(movie_id: int, db: Session = Depends(get_db)):
    return db.query(Review).filter(Review.movie_id == movie_id).all()


@router.put("/reviews/{review_id}", response_model=ReviewRead)
def update_review(review_id: int, payload: ReviewUpdate, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    review = db.query(Review).filter(Review.id == review_id).first()
    if not review:
        raise HTTPException(status_code=404, detail="Review not found")
    if review.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not allowed")
    if payload.rating is not None:
        review.rating = payload.rating
    if payload.title is not None:
        review.title = payload.title
    if payload.body is not None:
        review.body = payload.body
    db.add(review)
    db.commit()
    db.refresh(review)
    return review


@router.delete("/reviews/{review_id}")
def delete_review(review_id: int, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    review = db.query(Review).filter(Review.id == review_id).first()
    if not review:
        raise HTTPException(status_code=404, detail="Review not found")
    if review.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not allowed")
    db.delete(review)
    db.commit()
    return {"message": "deleted"}


@router.post("/reviews/{review_id}/like")
def like_review(review_id: int, current_user: UserRead = Depends(get_current_user)):
    # Stub: implement reaction storage
    return {"message": "liked"}


@router.post("/reviews/{review_id}/dislike")
def dislike_review(review_id: int, current_user: UserRead = Depends(get_current_user)):
    # Stub: implement reaction storage
    return {"message": "disliked"}

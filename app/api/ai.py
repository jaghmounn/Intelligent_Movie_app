from fastapi import APIRouter, Depends
from typing import Optional

from app.api.auth import get_current_user

router = APIRouter(prefix="/ai", tags=["AI"])


@router.post("/review-summary")
def review_summary(review_id: Optional[int] = None, text: Optional[str] = None, current_user=Depends(get_current_user)):
    # Minimal stub that would call llm_service
    content = text or f"Summary requested for review {review_id}"
    return {"summary": content[:200], "sentiment": "neutral", "highlights": []}


@router.post("/discussion-suggestion")
def discussion_suggestion(movie_id: int, current_user=Depends(get_current_user)):
    return {"suggestions": [{"topic": "Themes", "prompt": "Discuss the main themes of the movie."}]}


@router.post("/movie-analysis")
def movie_analysis(movie_id: int, options: dict = {} , current_user=Depends(get_current_user)):
    return {"analysis": {"summary": f"Analysis for movie {movie_id}"}, "model_version": "stub-1"}

from fastapi import APIRouter, Depends, HTTPException
from app.api.auth import get_current_user

router = APIRouter(prefix="/analytics", tags=["Analytics"])


@router.get("/popular-movies")
def popular_movies(period: str = "7d", limit: int = 20, current_user=Depends(get_current_user)):
    if not getattr(current_user, "is_registered", False):
        raise HTTPException(status_code=403, detail="admin required")
    # Stub: return fake analytics
    items = [{"movie_id": i, "views": 1000 - i} for i in range(1, limit + 1)]
    return {"items": items}


@router.get("/top-reviewers")
def top_reviewers(period: str = "30d", limit: int = 50, current_user=Depends(get_current_user)):
    if not getattr(current_user, "is_registered", False):
        raise HTTPException(status_code=403, detail="admin required")
    items = [{"user_id": i, "reviews": 50 - i} for i in range(1, limit + 1)]
    return {"items": items}


@router.get("/trending-discussions")
def trending_discussions(period: str = "7d", limit: int = 20, current_user=Depends(get_current_user)):
    if not getattr(current_user, "is_registered", False):
        raise HTTPException(status_code=403, detail="admin required")
    items = [{"thread_id": i, "activity": 100 - i} for i in range(1, limit + 1)]
    return {"items": items}

from fastapi import APIRouter, Depends
from typing import List

from app.api.auth import get_current_user

router = APIRouter(prefix="/recommendations", tags=["Recommendations"])


@router.get("")
def get_recommendations(page: int = 1, size: int = 20, source: str = "hybrid", current_user=Depends(get_current_user)):
    # Stub: return fake recommendations
    items = [{"id": i, "title": f"Recommended Movie {i}"} for i in range((page-1)*size+1, page*size+1)]
    return {"items": items, "page": page, "size": size}

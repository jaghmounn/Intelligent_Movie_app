from fastapi import APIRouter, Query
from app.services.tmdb_client import tmdb_client

router = APIRouter(prefix="/search", tags=["Search"])

@router.get("/")
async def search_multi(q: str = Query(..., min_length=1)):
    return await tmdb_client.get("/search/multi", params={"query": q})

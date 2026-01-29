from fastapi import APIRouter
from app.services.tmdb_client import tmdb_client

router = APIRouter(prefix="/movies", tags=["Movies"])

@router.get("/popular")
async def popular_movies():
    return await tmdb_client.get("/movie/popular")

@router.get("/{movie_id}")
async def movie_details(movie_id: int):
    return await tmdb_client.get(f"/movie/{movie_id}")

@router.get("/{movie_id}/credits")
async def movie_credits(movie_id: int):
    return await tmdb_client.get(f"/movie/{movie_id}/credits")

@router.get("/{movie_id}/videos")
async def movie_videos(movie_id: int):
    return await tmdb_client.get(f"/movie/{movie_id}/videos")

@router.get("/{movie_id}/recommendations")
async def movie_recommendations(movie_id: int):
    return await tmdb_client.get(f"/movie/{movie_id}/recommendations")

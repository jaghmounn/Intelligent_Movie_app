from fastapi import APIRouter
from app.services.tmdb_client import tmdb_client

router = APIRouter(prefix="/tv", tags=["TV Shows"])

@router.get("/popular")
async def popular_tv():
    return await tmdb_client.get("/tv/popular")

@router.get("/{tv_id}")
async def tv_details(tv_id: int):
    return await tmdb_client.get(f"/tv/{tv_id}")

@router.get("/{tv_id}/credits")
async def tv_credits(tv_id: int):
    return await tmdb_client.get(f"/tv/{tv_id}/credits")

@router.get("/{tv_id}/videos")
async def tv_videos(tv_id: int):
    return await tmdb_client.get(f"/tv/{tv_id}/videos")

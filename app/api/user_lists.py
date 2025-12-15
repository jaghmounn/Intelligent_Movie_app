from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.auth import get_current_user, get_db
from app.models.user_schema import UserRead
from app.models.user_list import Favorite, Watchlist

router = APIRouter(prefix="", tags=["UserLists"])  # movie-specific and user list endpoints


@router.post("/movies/{movie_id}/favorite")
def add_favorite(movie_id: int, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    fav = Favorite(user_id=current_user.id, movie_id=movie_id)
    db.add(fav)
    try:
        db.commit()
    except Exception:
        db.rollback()
    return {"message": "added"}


@router.delete("/movies/{movie_id}/favorite")
def remove_favorite(movie_id: int, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    fav = db.query(Favorite).filter(Favorite.user_id == current_user.id, Favorite.movie_id == movie_id).first()
    if fav:
        db.delete(fav)
        db.commit()
    return {"message": "removed"}


@router.get("/users/me/favorites")
def list_favorites(current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.query(Favorite).filter(Favorite.user_id == current_user.id).all()
    return [{"movie_id": r.movie_id} for r in rows]


@router.post("/movies/{movie_id}/watchlist")
def add_watchlist(movie_id: int, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    item = Watchlist(user_id=current_user.id, movie_id=movie_id)
    db.add(item)
    try:
        db.commit()
    except Exception:
        db.rollback()
    return {"message": "added"}


@router.delete("/movies/{movie_id}/watchlist")
def remove_watchlist(movie_id: int, current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    item = db.query(Watchlist).filter(Watchlist.user_id == current_user.id, Watchlist.movie_id == movie_id).first()
    if item:
        db.delete(item)
        db.commit()
    return {"message": "removed"}


@router.get("/users/me/watchlist")
def list_watchlist(current_user: UserRead = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.query(Watchlist).filter(Watchlist.user_id == current_user.id).all()
    return [{"movie_id": r.movie_id} for r in rows]

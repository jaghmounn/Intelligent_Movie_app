from fastapi import APIRouter, Query, Depends

router = APIRouter(prefix="/search", tags=["Search"])


@router.get("/movies")
def search_movies(q: str = Query(..., min_length=1), page: int = 1, size: int = 20):
    # Stub: integrate with search service / ElasticSearch
    items = [{"id": i, "title": f"Found {q} - {i}"} for i in range((page-1)*size+1, page*size+1)]
    return {"items": items, "page": page, "size": size}


@router.get("/users")
def search_users(q: str = Query(..., min_length=1), page: int = 1, size: int = 20):
    items = [{"id": i, "username": f"{q}_user_{i}"} for i in range((page-1)*size+1, page*size+1)]
    return {"items": items, "page": page, "size": size}


@router.get("/discussions")
def search_discussions(q: str = Query(..., min_length=1), page: int = 1, size: int = 20):
    items = [{"id": i, "title": f"Discussion {q} - {i}"} for i in range((page-1)*size+1, page*size+1)]
    return {"items": items, "page": page, "size": size}

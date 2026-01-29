from dotenv import load_dotenv

# Load environment variables from .env file before importing config
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.database import Base, engine
from app.api import auth as auth_router
from app.api import reviews as reviews_router
from app.api import comments as comments_router
from app.api import ai as ai_router
from app.api import recommendations as recommendations_router
from app.api import user_lists as user_lists_router
from app.api import search as search_router
from app.api import analytics as analytics_router
from app.routers import movies, tv, search


app = FastAPI(title="Intelligent Movie App")

@app.get("/")
def root():
    return {"message": "Welcome to Intelligent Movie App"}

origins = [
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,           # allow your frontend
    allow_credentials=True,
    allow_methods=["*"],             # allow GET, POST, OPTIONS...
    allow_headers=["*"],             # allow all headers
)

Base.metadata.create_all(bind=engine)
app.include_router(auth_router.router)
app.include_router(reviews_router.router)
app.include_router(comments_router.router)
app.include_router(ai_router.router)
app.include_router(recommendations_router.router)
app.include_router(user_lists_router.router)
app.include_router(search_router.router)
app.include_router(analytics_router.router)
app.include_router(movies.router)
app.include_router(tv.router)
app.include_router(search.router)


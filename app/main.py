from dotenv import load_dotenv

# Load environment variables from .env file before importing config
load_dotenv()

from fastapi import FastAPI
from app.db.database import Base, engine
from app.api.movies import router as movie_router
from app.api import auth as auth_router


app = FastAPI(title="Intelligent Movie App")

@app.get("/")
def root():
    return {"message": "Welcome to Intelligent Movie App"}


Base.metadata.create_all(bind=engine)
app.include_router(movie_router)
app.include_router(auth_router.router)



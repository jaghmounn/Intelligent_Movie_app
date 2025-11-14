from fastapi import FastAPI
from app.db.database import Base, engine
from app.api.movies import router as movie_router


app = FastAPI(title="Intelligent Movie App")

@app.get("/")
def root():
    return {"message": "Welcome to Intelligent Movie App"}

Base.metadata.create_all(bind=engine)
app.include_router(movie_router)



from pydantic import BaseModel

class MovieBase(BaseModel):
    title: str
    description: str
    genre: str
    year: int
    director: str

class MovieCreate(MovieBase):
    pass

class MovieRead(MovieBase):
    id: int
    class Config:
        from_attributes = True

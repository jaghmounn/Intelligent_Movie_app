import httpx
from app.core.config import TMDB_API_KEY, TMDB_BASE_URL

class TMDBClient:
    def __init__(self):
        self.client = httpx.AsyncClient(
            base_url=TMDB_BASE_URL,
            params={"api_key": TMDB_API_KEY}
        )

    async def get(self, url: str, params: dict = None):
        response = await self.client.get(url, params=params)
        response.raise_for_status()
        return response.json()

tmdb_client = TMDBClient()

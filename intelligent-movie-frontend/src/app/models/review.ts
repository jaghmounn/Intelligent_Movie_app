export interface ReviewCreate {
  rating: number;
  title?: string;
  body: string;
}

export interface ReviewUpdate {
  rating?: number;
  title?: string;
  body?: string;
}

export interface ReviewRead {
  id: number;
  movie_id: number;
  user_id: number;
  rating: number;
  title?: string;
  body: string;
  created_at?: string;
  updated_at?: string;
  likes?: number;
  dislikes?: number;
}
export interface Review {
}

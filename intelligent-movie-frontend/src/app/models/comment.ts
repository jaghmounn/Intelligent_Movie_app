export interface CommentCreate {
  body: string;
  parent_id?: number;
}

export interface CommentRead {
  id: number;
  movie_id: number;
  user_id: number;
  parent_id?: number;
  body: string;
  created_at?: string;
  updated_at?: string;
  replies?: CommentRead[];
}
export interface Comment {
}

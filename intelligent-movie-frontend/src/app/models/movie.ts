export interface Video {
  id: string;
  name: string;
  site?: string;
  type?: string;
  url?: string;
}

export interface PersonRole {
  id: number;
  name: string;
  character?: string;
  job?: string;
  profile_path?: string;
}

export interface MovieBrief {
  id: number;
  title: string;
  poster_url?: string;
  year?: number;
  genres?: string[];
  tmdb_id?: number;
}

export interface MovieDetail extends MovieBrief {
  overview?: string;
  runtime?: number;
  release_date?: string;
  trailers?: Video[];
  cast?: PersonRole[];
  ratings?: { source: string; value: string }[];
}
export interface Movie {
}

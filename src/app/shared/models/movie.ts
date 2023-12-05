export interface Movie {
  title: string;
  overview: string;
  actor: string;
  vote_average?: number;
  poster_path?: string;
  isFavorite: boolean;
  backdrop_path?: string;
  id?: number;
  release_date?: string;
  popularity?: number;
  genre_ids?: number[];
  vote_count?: number;
  original_language?: string;
  original_title?: string;
}

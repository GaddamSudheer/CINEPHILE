import type { Movie } from "../data/discoveries";
import { collections } from "../data/discoveries";

const allMovies: Movie[] = collections.flatMap(
  (collection) => collection.movies,
);

export function searchMovies(query: string): Movie[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return [];

  return allMovies.filter((movie) => {
    const searchableText = [
      movie.title,
      movie.country,
      movie.language,
      movie.category,
      movie.description,
      String(movie.year),
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

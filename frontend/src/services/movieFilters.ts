import type { Movie } from "../data/discoveries";
import { collections } from "../data/discoveries";

const allMovies: Movie[] = collections.flatMap(
  (collection) => collection.movies,
);

export interface MovieFilters {
  countries: string[];
  languages: string[];
  periods: string[];
  categories: string[];
}

export const emptyFilters: MovieFilters = {
  countries: [],
  languages: [],
  periods: [],
  categories: [],
};

function matchesPeriod(year: number, periods: string[]): boolean {
  if (periods.length === 0) return true;

  return periods.some((period) => {
    switch (period) {
      case "Classic":
        return year <= 1969;
      case "1970–1999":
        return year >= 1970 && year <= 1999;
      case "2000–2019":
        return year >= 2000 && year <= 2019;
      case "2020 onwards":
        return year >= 2020;
      default:
        return false;
    }
  });
}

export function filterMovies(query: string, filters: MovieFilters): Movie[] {
  const normalizedQuery = query.trim().toLowerCase();

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

    const matchesSearch =
      !normalizedQuery || searchableText.includes(normalizedQuery);

    const matchesCountry =
      filters.countries.length === 0 ||
      filters.countries.includes(movie.country);

    const matchesLanguage =
      filters.languages.length === 0 ||
      filters.languages.includes(movie.language);

    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(movie.category);

    const matchesReleasePeriod = matchesPeriod(movie.year, filters.periods);

    return (
      matchesSearch &&
      matchesCountry &&
      matchesLanguage &&
      matchesCategory &&
      matchesReleasePeriod
    );
  });
}

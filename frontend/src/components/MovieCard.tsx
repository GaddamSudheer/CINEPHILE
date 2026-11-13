import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Movie } from "../data/discoveries";

interface MovieCardProps {
  movie: Movie;
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movies/${createSlug(movie.title)}`} className="movie-card">
      <div className={`movie-artwork ${movie.artwork}`}>
        <span className="movie-category">{movie.category}</span>
        <span className="movie-artwork-title">{movie.title}</span>
        <span className="movie-card-action">
          Explore film <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="movie-card-info">
        <div>
          <h3>{movie.title}</h3>
          <p>
            {movie.year} · {movie.country}
          </p>
        </div>
        <ArrowUpRight size={18} />
      </div>
    </Link>
  );
}

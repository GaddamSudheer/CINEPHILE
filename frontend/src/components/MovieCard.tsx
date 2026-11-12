import type { Movie } from "../data/discoveries";
import { ArrowUpRight } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="movie-card">
      <div className={`movie-artwork ${movie.artwork}`}>
        <span className="artwork-category">{movie.category}</span>
        <div className="artwork-title">
          <span>{movie.country.toUpperCase()}</span>
          <h3>{movie.title}</h3>
          <span>{movie.year}</span>
        </div>
        <button
          className="movie-open"
          aria-label={`Explore ${movie.title}`}
          onClick={() => console.log("Selected:", movie.title)}
        >
          <ArrowUpRight size={19} />
        </button>
      </div>

      <div className="movie-info">
        <div className="movie-title-row">
          <h3>{movie.title}</h3>
          <span>{movie.year}</span>
        </div>
        <p>{movie.description}</p>
        <div className="movie-meta">
          <span>{movie.country}</span>
          <span>{movie.language}</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;

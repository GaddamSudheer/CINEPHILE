import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Globe2, Calendar, Languages } from "lucide-react";
import { collections } from "../data/discoveries";
import "./MovieDetailPage.css";

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function MovieDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const movie = collections
    .flatMap((collection) => collection.movies)
    .find((item) => createSlug(item.title) === slug);

  if (!movie) {
    return (
      <main className="movie-not-found">
        <h1>Film not found</h1>
        <p>The film you're looking for doesn't exist in our catalogue.</p>
        <Link to="/">Return to discovery</Link>
      </main>
    );
  }

  return (
    <main className="movie-detail-page">
      <nav className="detail-navigation">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Back to discovery
        </Link>
        <span className="detail-brand">CINEPHILE</span>
      </nav>

      <section className="movie-detail-hero">
        <div className={`detail-artwork ${movie.artwork}`}>
          <span>{movie.title}</span>
        </div>

        <div className="movie-detail-info">
          <span className="detail-category">{movie.category}</span>
          <h1>{movie.title}</h1>
          <p className="detail-description">{movie.description}</p>

          <div className="movie-metadata">
            <div>
              <Calendar size={17} />
              <span>{movie.year}</span>
            </div>
            <div>
              <Globe2 size={17} />
              <span>{movie.country}</span>
            </div>
            <div>
              <Languages size={17} />
              <span>{movie.language}</span>
            </div>
          </div>

          {movie.director && (
            <div className="detail-extra">
              <span className="detail-label">DIRECTED BY</span>
              <p>{movie.director}</p>
            </div>
          )}

          {movie.cast && (
            <div className="detail-extra">
              <span className="detail-label">CAST</span>
              <p>{movie.cast.join(" · ")}</p>
            </div>
          )}

          {movie.runtimeMinutes && (
            <div className="detail-extra">
              <span className="detail-label">RUNTIME</span>
              <p>{movie.runtimeMinutes} minutes</p>
            </div>
          )}
          {/* </div> */}

          {movie.genres && (
            <section className="detail-information">
              <h2>Genres</h2>
              <div className="detail-tags">
                {movie.genres.map((genre) => (
                  <span key={genre}>{genre}</span>
                ))}
              </div>
            </section>
          )}

          {movie.themes && (
            <section className="detail-information">
              <h2>Themes</h2>
              <div className="detail-tags">
                {movie.themes.map((theme) => (
                  <span key={theme}>{theme}</span>
                ))}
              </div>
            </section>
          )}

          {movie.synopsis && (
            <section className="detail-information">
              <h2>Story</h2>
              <p>{movie.synopsis}</p>
            </section>
          )}

          {movie.criticalReception && (
            <section className="detail-information">
              <h2>Critical Reception</h2>
              <p>{movie.criticalReception}</p>
            </section>
          )}

          {movie.culturalSignificance && (
            <section className="detail-information">
              <h2>Cultural Significance</h2>
              <p>{movie.culturalSignificance}</p>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}

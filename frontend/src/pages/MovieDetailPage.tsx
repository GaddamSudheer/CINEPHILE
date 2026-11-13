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
        </div>
      </section>
    </main>
  );
}

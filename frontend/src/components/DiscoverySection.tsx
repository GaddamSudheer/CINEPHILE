import { ArrowRight } from "lucide-react";
import type { Collection } from "../data/discoveries";
import MovieCard from "./MovieCard";

interface DiscoverySectionProps {
  collection: Collection;
}

function DiscoverySection({ collection }: DiscoverySectionProps) {
  return (
    <section className="discovery-section" id={collection.id}>
      <div className="collection-header">
        <div>
          <span className="section-kicker">{collection.eyebrow}</span>
          <h2>{collection.title}</h2>
          <p>{collection.description}</p>
        </div>

        <button className="view-all">
          View collection <ArrowRight size={16} />
        </button>
      </div>

      <div className="movie-grid">
        {collection.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default DiscoverySection;

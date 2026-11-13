import { useState } from "react";
import {
  Search,
  Menu,
  Compass,
  Clapperboard,
  Film,
  Tv,
  Globe2,
  Sparkles,
  ArrowRight,
  Play,
  X,
  // SlidersHorizontal,
} from "lucide-react";
import "./App.css";
import DiscoverySection from "./components/DiscoverySection";
import { collections } from "./data/discoveries";
import MovieCard from "./components/MovieCard";
// import { searchMovies } from "./services/movieSearch";
import { emptyFilters, filterMovies } from "./services/movieFilters";
import type { MovieFilters } from "./services/movieFilters";
import FilterPanel from "./components/FilterPanel";

function App() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<MovieFilters>(emptyFilters);
  const results = filterMovies(search, filters);
  const hasSearch = search.trim().length > 0;
  const hasActiveFilters = Object.values(filters).some(
    (values) => values.length > 0,
  );
  const showResults = hasSearch || hasActiveFilters;

  return (
    <main className="app">
      <header className="navbar">
        <a href="/" className="brand">
          <span className="brand-icon">
            <Clapperboard size={23} />
          </span>
          <span>
            CINE<span className="brand-gold">PHILE</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#discover" className="active">
            <Compass size={16} /> Discover
          </a>
          <a href="#movies">
            <Film size={16} /> Movies
          </a>
          <a href="#series">
            <Tv size={16} /> Series
          </a>
          <a href="#explore">
            <Globe2 size={16} /> World Cinema
          </a>
        </nav>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="menu-button" aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <section className="hero" id="discover">
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            <span>CINEMA HAS NO BOUNDARIES</span>
          </div>

          <h1>
            Beyond the <span>mainstream.</span>
            <br />
            Into the extraordinary.
          </h1>

          <p className="hero-description">
            Discover extraordinary stories from every corner of the world. From
            forgotten masterpieces to modern classics, find cinema that stays
            with you.
          </p>

          <div className="hero-search">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search films, countries, languages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                aria-label="Clear search"
                onClick={() => setSearch("")}
              >
                <X size={17} />
              </button>
            )}
            <button
              onClick={() =>
                document.getElementById("search-results")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Explore <ArrowRight size={16} />
            </button>
          </div>

          <div className="hero-meta">
            <span>
              <Film size={15} /> Movies
            </span>
            <span>
              <Tv size={15} /> Series
            </span>
            <span>
              <Globe2 size={15} /> Every language
            </span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>AN OPEN WORLD OF CINEMA</span>
          <button
            onClick={() =>
              document
                .getElementById("collections")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Discover more <Play size={13} />
          </button>
        </div>
      </section>
      <FilterPanel filters={filters} setFilters={setFilters} />
      {showResults && (
        <section className="search-results" id="search-results">
          <div className="collection-header">
            <div>
              <span className="section-kicker">YOUR DISCOVERY STARTS HERE</span>
              <h2>Search Results</h2>
              <p>
                {results.length} {results.length === 1 ? "film" : "films"} found
                for "{search.trim()}"
              </p>
            </div>
          </div>

          {results.length > 0 ? (
            <div className="movie-grid">
              {results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <Search size={30} />
              <h3>No films found</h3>
              <p>Try another title, country, language or year.</p>
            </div>
          )}
        </section>
      )}
      <section className="intro-section" id="collections">
        <div>
          <span className="section-kicker">A DIFFERENT WAY TO DISCOVER</span>
          <h2>
            Not just what's popular.
            <br />
            What deserves to be discovered.
          </h2>
        </div>
        <p>
          Great cinema doesn't always make the headlines. Explore stories beyond
          algorithms, borders and box-office numbers.
        </p>
      </section>
      {collections.map((collection) => (
        <DiscoverySection key={collection.id} collection={collection} />
      ))}
    </main>
  );
}

export default App;

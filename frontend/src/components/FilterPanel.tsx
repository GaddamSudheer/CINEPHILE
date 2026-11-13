import type { Dispatch, SetStateAction } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import type { MovieFilters } from "../services/movieFilters";
import { filterOptions } from "../data/filterOptions";

interface FilterPanelProps {
  filters: MovieFilters;
  setFilters: Dispatch<SetStateAction<MovieFilters>>;
}

type FilterKey = keyof MovieFilters;

const groups: {
  key: FilterKey;
  label: string;
  options: string[];
}[] = [
  { key: "countries", label: "Country", options: filterOptions.countries },
  { key: "languages", label: "Language", options: filterOptions.languages },
  { key: "periods", label: "Release Period", options: filterOptions.periods },
  { key: "categories", label: "Category", options: filterOptions.categories },
];

export default function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  const hasActiveFilters = Object.values(filters).some(
    (values) => values.length > 0,
  );

  function toggleFilter(key: FilterKey, option: string) {
    setFilters((current) => ({
      ...current,
      [key]: current[key].includes(option)
        ? current[key].filter((value) => value !== option)
        : [...current[key], option],
    }));
  }

  return (
    <div className="filter-panel">
      <div className="filter-panel-heading">
        <div>
          <SlidersHorizontal size={17} />
          <span>Refine Discovery</span>
        </div>

        {hasActiveFilters && (
          <button
            className="clear-filters"
            onClick={() =>
              setFilters({
                countries: [],
                languages: [],
                periods: [],
                categories: [],
              })
            }
          >
            <X size={14} />
            Clear all
          </button>
        )}
      </div>

      <div className="filter-groups">
        {groups.map((group) => (
          <div className="filter-group" key={group.key}>
            <h4>{group.label}</h4>

            <div className="filter-options">
              {group.options.map((option) => (
                <button
                  key={option}
                  className={`filter-chip ${
                    filters[group.key].includes(option) ? "active" : ""
                  }`}
                  onClick={() => toggleFilter(group.key, option)}
                  aria-pressed={filters[group.key].includes(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

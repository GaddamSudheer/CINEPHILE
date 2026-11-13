export interface Movie {
  id: number;
  title: string;
  year: number;
  country: string;
  language: string;
  description: string;
  category: string;
  artwork: string;

  releaseDate?: string;
  runtimeMinutes?: number;
  director?: string;
  cast?: string[];
  genres?: string[];
  themes?: string[];
  synopsis?: string;
  criticalReception?: string;
  culturalSignificance?: string;
  posterUrl?: string;
  contentType?: "movie" | "series";
}

export interface Collection {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  movies: Movie[];
}

export const collections: Collection[] = [
  {
    id: "hidden-gems",
    eyebrow: "BEYOND THE SPOTLIGHT",
    title: "Hidden Gems",
    description: "Extraordinary films that deserve to be discovered.",
    movies: [
      {
        id: 1,
        title: "The Lunchbox",
        year: 2013,
        country: "India",
        language: "Hindi",
        description: "An unexpected connection born from a lunchbox delivery.",
        category: "Hidden Gem",
        artwork: "artwork-one",

        director: "Ritesh Batra",
        cast: ["Irrfan Khan", "Nimrat Kaur", "Nawazuddin Siddiqui"],
        genres: ["Drama", "Romance"],
        themes: [
          "Loneliness",
          "Human connection",
          "Second chances",
          "Urban life",
        ],
        runtimeMinutes: 104,
        contentType: "movie",
        synopsis:
          "An unusual mistake in Mumbai’s lunchbox delivery system connects a lonely office worker and an unhappy housewife. Through handwritten notes exchanged inside a lunchbox, two strangers gradually develop an unexpected emotional bond.",
        criticalReception:
          "Widely acclaimed for its restrained storytelling, performances and intimate portrayal of everyday human relationships.",
        culturalSignificance:
          "The film brought international attention to Mumbai’s dabbawala delivery network and demonstrated how a deeply local story could resonate with audiences across cultures.",
      },
      {
        id: 2,
        title: "Cure",
        year: 1997,
        country: "Japan",
        language: "Japanese",
        description: "A haunting psychological mystery.",
        category: "Cult Classic",
        artwork: "artwork-two",
      },
      {
        id: 3,
        title: "A Separation",
        year: 2011,
        country: "Iran",
        language: "Persian",
        description: "A deeply human story of family and difficult choices.",
        category: "Acclaimed",
        artwork: "artwork-three",
      },
      {
        id: 4,
        title: "Yi Yi",
        year: 2000,
        country: "Taiwan",
        language: "Mandarin",
        description: "An intimate portrait of everyday life.",
        category: "Hidden Gem",
        artwork: "artwork-four",
      },
    ],
  },
  {
    id: "timeless-classics",
    eyebrow: "THE CINEMA THAT SHAPED US",
    title: "Timeless Classics",
    description: "Landmark films that continue to inspire generations.",
    movies: [
      {
        id: 5,
        title: "Pather Panchali",
        year: 1955,
        country: "India",
        language: "Bengali",
        description: "A landmark of Indian and world cinema.",
        category: "Masterpiece",
        artwork: "artwork-five",
      },
      {
        id: 6,
        title: "Tokyo Story",
        year: 1953,
        country: "Japan",
        language: "Japanese",
        description: "A quiet meditation on family and time.",
        category: "Masterpiece",
        artwork: "artwork-six",
      },
      {
        id: 7,
        title: "The Godfather",
        year: 1972,
        country: "USA",
        language: "English",
        description: "An enduring crime-family saga.",
        category: "Classic",
        artwork: "artwork-seven",
      },
      {
        id: 8,
        title: "Bicycle Thieves",
        year: 1948,
        country: "Italy",
        language: "Italian",
        description: "A defining work of Italian neorealism.",
        category: "Classic",
        artwork: "artwork-eight",
      },
    ],
  },
  {
    id: "world-cinema",
    eyebrow: "STORIES WITHOUT BORDERS",
    title: "World Cinema",
    description:
      "Explore remarkable storytelling across languages and cultures.",
    movies: [
      {
        id: 9,
        title: "The Handmaiden",
        year: 2016,
        country: "South Korea",
        language: "Korean",
        description: "An elaborate tale of deception and desire.",
        category: "World Cinema",
        artwork: "artwork-nine",
      },
      {
        id: 10,
        title: "Amélie",
        year: 2001,
        country: "France",
        language: "French",
        description: "A whimsical celebration of small acts of kindness.",
        category: "World Cinema",
        artwork: "artwork-ten",
      },
      {
        id: 11,
        title: "Cinema Paradiso",
        year: 1988,
        country: "Italy",
        language: "Italian",
        description: "A nostalgic love letter to cinema.",
        category: "World Cinema",
        artwork: "artwork-eleven",
      },
      {
        id: 12,
        title: "Rashomon",
        year: 1950,
        country: "Japan",
        language: "Japanese",
        description: "A story that challenges the nature of truth.",
        category: "World Cinema",
        artwork: "artwork-twelve",
      },
    ],
  },
];

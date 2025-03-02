import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import HomeMovieCard from "../components/HomeMovieCard";
import Dropdown from "../components/Dropdown";
import { Movie } from "../types/types";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;
const randomMovies = [
  "Avengers",
  "Batman",
  "Spider-Man",
  "Inception",
  "Matrix",
];

const fetchMovies = async (title: string, type?: string, year?: string) => {
  if (!title.trim()) throw new Error("Please enter a movie title.");
  const url = new URL("https://www.omdbapi.com/");
  url.searchParams.append("s", title);
  url.searchParams.append("apikey", apiKey);
  if (type) url.searchParams.append("type", type);
  if (year) url.searchParams.append("y", year);

  const response = await fetch(url.toString());
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(
      data.Error || "No results found. Please try another search."
    );
  }
  return data.Search || [];
};

const Homepage = () => {
  const storedSearch =
    localStorage.getItem("lastSearch") ||
    randomMovies[Math.floor(Math.random() * randomMovies.length)];
  const storedType = localStorage.getItem("lastType") || "";
  const storedYear = localStorage.getItem("lastYear") || "";

  const [searchTerm, setSearchTerm] = useState(storedSearch);
  const [type, setType] = useState(storedType);
  const [year, setYear] = useState(storedYear);

  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["movies", searchTerm, type, year],
    queryFn: () => fetchMovies(searchTerm, type, year),
    enabled: !!searchTerm,
    staleTime: 1000 * 60 * 5,
  });

  const handleSearch = (title: string) => {
    if (!title.trim()) return;
    localStorage.setItem("lastSearch", title);
    setSearchTerm(title);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    if (filterType === "type") {
      localStorage.setItem("lastType", value);
      setType(value);
    }
    if (filterType === "year") {
      localStorage.setItem("lastYear", value);
      setYear(value);
    }
  };

  const typeOptions = [
    { value: "", label: "All Types" },
    { value: "movie", label: "Movies" },
    { value: "series", label: "Series" },
    { value: "episode", label: "Episodes" },
  ];

  const yearOptions = Array.from({ length: 50 }, (_, i) => ({
    value: (new Date().getFullYear() - i).toString(),
    label: (new Date().getFullYear() - i).toString(),
  }));

  return (
    <section className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
         Habib Movie App
        </h1>
        <SearchBar onSearch={handleSearch} defaultValue={searchTerm} />

        <div className="flex gap-4 mt-4">
          <Dropdown
            placeholder="All Types"
            options={typeOptions}
            onChange={(value) => handleFilterChange("type", value)}
          />
          <Dropdown
            placeholder="Year"
            options={yearOptions}
            onChange={(value) => handleFilterChange("year", value)}
          />
        </div>
        <div className="mt-8">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error.message} />}
          {movies && movies.length > 0 && (
            <section className="flex justify-start items-stretch gap-4 flex-col">
              {movies.map((movie: Movie) => (
                <HomeMovieCard key={movie.imdbID} movie={movie} />
              ))}
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Homepage;

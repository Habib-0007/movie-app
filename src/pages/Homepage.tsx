import { useState } from "react";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import HomeMovieCard from "../components/HomeMovieCard";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const Homepage = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchMovie = async (title: string) => {
    if (!title.trim()) return;

    setLoading(true);
    setError(null);
    setMovies([]);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(
          title
        )}&apikey=${apiKey}`
      );
      const data = await response.json();

      console.log(data);

      if (data.Response === "False") {
        setError(data.Error || "Movie not found");
      } else {
        setMovies(data.Search || []);
      }
    } catch (err) {
      setError("An error occurred while fetching the movie. Please try again.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Movie Search App
        </h1>

        <SearchBar onSearch={searchMovie} />

        <div className="mt-8">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {movies.length > 0 && (
            <section className="flex justify-start items-stretch gap-4 flex-col">
              {movies.map((movie: any) => (
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

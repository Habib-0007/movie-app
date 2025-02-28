import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import MovieCard from "../components/MovieCard";


const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const fetchMovieDetails = async (id: string) => {
  "use server";
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
    );
    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "Movie not found");
    }
    return data;
  } catch (err) {
    throw new Error(
      "An error occurred while fetching the movie. Please try again."
    );
  }
};

const MovieById = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const getMovie = async () => {
      setLoading(true);
      setError(null);

      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Movie Search App
        </h1>

        <div className="mt-8">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {movie && <MovieCard movie={movie} />}
        </div>
      </div>
    </div>
  );
};

export default MovieById;

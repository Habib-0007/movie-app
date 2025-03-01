import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import MovieCard from "../components/MovieCard";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const fetchMovieDetails = async (id: string) => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
  );
  const data = await response.json();
  if (data.Response === "False")
    throw new Error(data.Error || "Movie not found");
  return data;
};

const MovieById = () => {
  const { id } = useParams();

  const {
    data: movie,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id!),
    enabled: !!id,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Movie Search App
        </h1>

        <div className="mt-8">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error.message} />}
          {movie && <MovieCard movie={movie} />}
        </div>
      </div>
    </div>
  );
};

export default MovieById;

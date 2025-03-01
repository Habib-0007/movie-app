import { Link } from "react-router-dom";
import { Movie } from "../types/types";

const HomeMovieCard = ({ movie }: { movie: Movie }) => {
  const fallbackPoster = "https://placehold.co/300x450";

  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : fallbackPoster}
            alt={`${movie.Title} poster`}
            className="h-64 w-full object-cover md:w-48"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {movie.Title}
          </h2>

          <div className="text-sm text-gray-600 mb-4">
            <p>Released Year: {movie.Year}</p>
            <p className="capitalize">Type: {movie.Type}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeMovieCard;

import { Link } from "react-router-dom";
import { Movie } from "../types/types";

const HomeMovieCard = ({ movie }: { movie: Movie }) => {
  const fallbackPoster = "https://placehold.co/300x450";
  const imageUrl = movie?.Poster !== "N/A" ? movie?.Poster : fallbackPoster;

  return (
    <Link
      to={`/movie/${movie?.imdbID}`}
      className="bg-white rounded-lg overflow-hidden border-2 border-black text-black shadow-[5px_3px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform duration-200"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={imageUrl}
            alt={`${movie?.Title} poster`}
            className="h-64 w-full object-cover md:w-48"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {movie?.Title}
          </h2>

          <div className="text-sm text-gray-600 mb-4">
            <p>Released Year: {movie?.Year}</p>
            <p className="capitalize">Type: {movie?.Type}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeMovieCard;

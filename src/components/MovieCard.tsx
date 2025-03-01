import { MovieByIdInterface } from "../types/types";

const MovieCard = ({ movie }: { movie: MovieByIdInterface }) => {
  const fallbackPoster = "https://placehold.co/300x450";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={movie?.Poster !== "N/A" ? movie?.Poster : fallbackPoster}
            alt={`${movie?.Title} poster`}
            className="h-64 w-full object-cover md:w-48"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {movie?.Title}
          </h2>

          <div className="text-sm text-gray-600 mb-4">
            {movie?.Released !== "N/A" && <p>Released: {movie?.Released}</p>}
            {movie?.Runtime !== "N/A" && <p>Runtime: {movie?.Runtime}</p>}
            {movie?.Genre !== "N/A" && <p>Genre: {movie?.Genre}</p>}
            {movie?.Awards !== "N/A" && <p>Awards: {movie?.Awards}</p>}
            {movie?.Country !== "N/A" && <p>Country: {movie?.Country}</p>}
            {movie?.Type !== "N/A" && <p>Type: {movie?.Type}</p>}
          </div>

          <div className="mb-4">
            {movie?.imdbRating !== "N/A" && (
              <div className="flex items-center">
                <span className="text-yellow-500 font-bold mr-1">
                  {movie?.imdbRating}
                </span>

                <span className="text-gray-600">/10 IMDb Rating</span>
              </div>
            )}
            {movie?.Ratings &&
              movie?.Ratings.map((rating, index: number) => (
                <div key={index} className="text-sm text-gray-600">
                  {rating?.Source}: {rating?.Value}
                </div>
              ))}
          </div>

          <p className="text-gray-700">{movie?.Plot}</p>

          <div className="mt-4 text-sm text-gray-600">
            {movie?.Director !== "N/A" && <p>Director: {movie?.Director}</p>}
            {movie?.Actors !== "N/A" && <p>Starring: {movie?.Actors}</p>}
            {movie?.Writer !== "N/A" && <p>Writer: {movie?.Writer}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

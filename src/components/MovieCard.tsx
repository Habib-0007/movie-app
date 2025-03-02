import { MovieByIdInterface } from "../types/types";

const MovieCard = ({ movie }: { movie: MovieByIdInterface }) => {
  const fallbackPoster = "https://placehold.co/300x450";

  return (
    <div
      className="bg-white rounded-lg overflow-hidden border-2 border-black text-black shadow-[10px_6px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:-translate-y-0.5
			hover:-translate-x-0.5 transition-transform duration-200"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={movie?.Poster !== "N/A" ? movie?.Poster : fallbackPoster}
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
            {movie?.Released !== "N/A" && (
              <p>
                <span className="underline">Released</span>: {movie?.Released}
              </p>
            )}
            {movie?.Runtime !== "N/A" && (
              <p>
                <span className="underline">Runtime</span>: {movie?.Runtime}
              </p>
            )}
            {movie?.Genre !== "N/A" && (
              <p>
                <span className="underline">Genre</span>: {movie?.Genre}
              </p>
            )}
            {movie?.Awards !== "N/A" && (
              <p>
                <span className="underline">Awards</span>: {movie?.Awards}
              </p>
            )}
            {movie?.Country !== "N/A" && (
              <p>
                <span className="underline">Country</span>: {movie?.Country}
              </p>
            )}
            {movie?.Type !== "N/A" && (
              <p>
                <span className="underline">Type</span>: {movie?.Type}
              </p>
            )}
          </div>

          <div className="mb-4">
            {movie?.imdbRating !== "N/A" && (
              <div className="flex items-center">
                <span className="text-sm text-gray-600">
                  <span className="px-2 py-1 bg-blue-500 rounded-sm text-white">
                    IMDB Rating
                  </span>
                  : {movie?.imdbRating}/10
                </span>
              </div>
            )}
            {movie?.Ratings &&
              movie?.Ratings.map((rating, index: number) => (
                <div key={index} className="text-sm text-gray-600 mt-2">
                  <span className="px-2 py-1 bg-blue-500 rounded-sm text-white">
                    {rating?.Source}
                  </span>
                  : {rating?.Value}
                </div>
              ))}
          </div>

          <p className="text-gray-700">
            <span className="underline">Plot</span>: {movie?.Plot}
          </p>

          <div className="mt-4 text-sm text-gray-600">
            {movie?.Director !== "N/A" && (
              <p>
                <span className="underline">Director</span>: {movie?.Director}
              </p>
            )}
            {movie?.Actors !== "N/A" && (
              <p>
                <span className="underline">Starring</span>: {movie?.Actors}
              </p>
            )}
            {movie?.Writer !== "N/A" && (
              <p>
                <span className="underline">Writer</span>: {movie?.Writer}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

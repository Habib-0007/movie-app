const MovieCard = ({ movie }: { movie: any }) => {
  const fallbackPoster =
    "https://via.placeholder.com/300x450?text=No+Poster+Available";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
            <p>Released: {movie.Released}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Genre: {movie.Genre}</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center">
              <span className="text-yellow-500 font-bold mr-1">
                {movie.imdbRating}
              </span>
              <span className="text-gray-600">/10 IMDb Rating</span>
            </div>
            {movie.Ratings &&
              movie.Ratings.map((rating: any, index: number) => (
                <div key={index} className="text-sm text-gray-600">
                  {rating.Source}: {rating.Value}
                </div>
              ))}
          </div>

          <p className="text-gray-700">{movie.Plot}</p>

          <div className="mt-4 text-sm text-gray-600">
            <p>Director: {movie.Director}</p>
            <p>Starring: {movie.Actors}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

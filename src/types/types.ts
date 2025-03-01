export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

export interface MovieByIdInterface {
  Poster: string;
  Title: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Awards: string;
  Country: string;
  Type: string;
  imdbRating: string;
  Plot: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Director: string;
  Actors: string;
  Writer: string;
}

export type DropdownProps = {
  placeholder: string;
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
};

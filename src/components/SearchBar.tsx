import { FormEvent, useState } from "react";

const SearchBar = ({
  onSearch,
  defaultValue = "",
}: {
  onSearch: (title: string) => void;
  defaultValue: string;
}) => {
  const [title, setTitle] = useState(defaultValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(title);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a movie title..."
        className="flex-grow p-3 rounded border-2 outline-none border-black shadow-[5px_3px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-200"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-medium py-3 px-6 rounded  border-2 border-black shadow-[5px_3px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

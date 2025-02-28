import { FormEvent, useState } from "react";

const SearchBar = ({ onSearch }: { onSearch: any }) => {
  const [title, setTitle] = useState("");

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
        className="flex-grow p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded transition duration-200 shadow-sm"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

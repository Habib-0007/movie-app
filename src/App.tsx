import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieById from "./pages/MovieById";

function App() {
  return (
    <section>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/movie/:id" element={<MovieById />} />
      </Routes>
      <footer className="text-center p-4">
        Created with &#10084; by{" "}
        <Link
          to="https://habibadebayo.vercel.app"
          className="underline text-black transition-normal duration-200 hover:text-blue-800"
        >
          Habib Adebayo
        </Link>
      </footer>
    </section>
  );
}

export default App;

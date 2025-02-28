import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieById from "./pages/MovieById";

function App() {
  return (
    <section>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/movie/:id" element={<MovieById />} />
      </Routes>
      <footer className="text-center p-4">Created with love by Habib Adebayo</footer>
    </section>
  );
}

export default App;

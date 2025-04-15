import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:id" element={<Album />} />
    </Routes>
  );
}

export default App;

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Video from "./pages/Video/Video";
import Favorit from "./pages/Favorit/Favorit";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="favourite" element={<Favorit />} />
      </Routes>
    </>
  );
}

export default App;

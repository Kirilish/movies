import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Videos from "./pages/Videos/Videos";
import Favourite from "./pages/Favourite/Favourite";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Videos />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </>
  );
}

export default App;

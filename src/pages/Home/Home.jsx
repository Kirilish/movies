import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionMovies, actionType } from "../../store/actions/moviesActions";
import Card from "../../components/Card/Card";
import "./Home.css";
import { actionFavorite } from "../../store/actions/favoriteAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(actionMovies.getMovies(page));
  }, [page]);

  const handlePage = (e) => {
    setPage(e.target.textContent);
  };

  const handleAdd = (id) => (e) => {
    e.target.classList.remove("active");
    dispatch(actionFavorite.addMovies(movies.find((i) => i.id === id)));
    toast.success('🦄 Movie added!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };
  return (
    <>
      <div className="wrapper">
        {movies.map((i) => {
          return (
            <Card
              title={i.title}
              vote_average={i.vote_average}
              release_date={i.release_date}
              poster_path={i.poster_path}
              id={i.id}
              key={i.id}
              onClick={handleAdd(i.id)}
              text="Add"
            />
          );
        })}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
      <button onClick={handlePage}>1</button>
      <button onClick={handlePage}>2</button>
      <button onClick={handlePage}>3</button>
    </>
  );
}

export default Home;

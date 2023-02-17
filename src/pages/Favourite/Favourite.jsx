import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { actionFavorite } from "../../store/actions/favoriteAction";

function Favourite() {
  const dispatch = useDispatch();

  const favorite = useSelector((state) => state.favorite.favorite);

  const handleDelet = (id) => () => {
    dispatch(actionFavorite.deleteMovies(id));
  };

  const handleDeletAll = () => () => {
    dispatch(actionFavorite.deleteAll());
  };
  return (
    <>
    <div><button onClick={handleDeletAll()}>Delet All</button></div>
      <div>
        {favorite.map((i) => {
          return (
            <Card
              title={i.title}
              vote_average={i.vote_average}
              release_date={i.release_date}
              poster_path={i.poster_path}
              id={i.id}
              key={i.id}
              onClick={handleDelet(i.id)}
              text="Delet"
            />
          );
        })}
      </div>
    </>
  );
}

export default Favourite;
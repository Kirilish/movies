import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({
  title,
  vote_average,
  release_date,
  poster_path,
  id,
  onClick,
  text,
}) {
  const favorite = useSelector((state) => state.favorite.favorite);
  return (
    <div>
      <div className="card">
        <p className="card-title">{title}</p>
        <p>rating:{vote_average}</p>
        <p>date: {release_date}</p>
        <Link to={`/video/:${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="card"
            width="250"
          />
        </Link>
        <div>
          <button
            className={favorite.find((i) => i.id === id) ? "active" : ""}
            onClick={onClick}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

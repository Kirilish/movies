import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionMovies } from "../../store/actions/moviesActions";

function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearch(e.target.value)
  };

  const handleSearch = () => {
    if(search){
      dispatch(actionMovies.getMoviesSearch(search))
    }
  };

  const favorite = useSelector((state) => state.favorite.favorite);
  return (
    <div className="header">
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/favourite"}>
        <button>favourite {favorite.length}</button>
      </Link>
      <div>
        <input onChange={handleChange} type="text" />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Header;

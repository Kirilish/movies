import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionMovies } from "../../store/actions/moviesActions";
import QRCode from "react-qr-code";
import "./info.css";

function Info() {
  const params = useParams();
  const id = params.id.slice(1);
  const dispatch = useDispatch();

  const info = useSelector((state) => state.movies.info);

  useEffect(() => {
    dispatch(actionMovies.getMoviesInfo(id));
  }, []);

  return (
    <div className="qr">
      {info.homepage && <QRCode size={300} value={info.homepage} />}
    </div>
  );
}

export default Info;

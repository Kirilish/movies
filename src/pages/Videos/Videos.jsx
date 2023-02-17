import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionVideo } from "../../store/actions/moviesVideo";
import Spinner from "../../components/Spinner/Spinner";

function Video() {
  const params = useParams();
  const id = params.id.slice(1);

  const dispatch = useDispatch();
  const { loading, video } = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(actionVideo.getMoviesVideos(id));
  }, [dispatch, id]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <div>
      <YouTube videoId={video.key} opts={opts} />;
    </div>
  );
}

export default Video;

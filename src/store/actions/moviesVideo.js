import axios from 'axios'

export const actionType = {
  SET_MOVIES_VIDEO: 'SET_MOVIES',
  SET_MOVIES_SUCCESS_VIDEO: 'SET_MOVIES_SUCCESS',
  SET_MOVIES_ERROR_VIDEO: 'SET_MOVIES_ERROR',
}
export const actionVideo = {
  getMoviesVideos: (id) => {
    return async (dispatch) => {
      dispatch({ type: actionType.SET_MOVIES_VIDEO })
      await axios
        .get(
          `http://api.themoviedb.org/3/movie/${id}?api_key=9885801ebff4fd52f79c28d7e495e46d&append_to_response=videos`,
        )
        .then((res) => {
          dispatch({
            type: actionType.SET_MOVIES_SUCCESS_VIDEO,
            payload: res.data.videos.results[0],
          })
        })
        .catch((err) => {
          dispatch({ type: actionType.SET_MOVIES_ERROR_VIDEO, payload: err })
        })
    }
  },
}

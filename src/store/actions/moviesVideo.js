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
          `http://api.themoviedb.org/3/movie/${id}?api_key=fda7c15a6c66e214c0ef6a082e75bbdb&append_to_response=videos`,
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

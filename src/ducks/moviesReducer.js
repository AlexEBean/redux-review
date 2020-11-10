// Initial state
const initialState = {
    title: '',
    poster: '',
    rating: null,
    movies: []
}

// Action types/ Action constants
const SET_MOVIE_INFO = 'SET_MOVIE_INFO'


// Action builders - every action builder needs to return an object with 2 keys/properties: type and payload
export const setMovieInfo = (title, poster, rating) => {
  return {
    type: SET_MOVIE_INFO,
    payload: { title, poster, rating },
  }
}

// reducer
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_INFO:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default moviesReducer
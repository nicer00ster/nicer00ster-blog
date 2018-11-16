import * as types from '../constants';

const initialState = {
  posts: [],
  fetchingPosts: false,
  error: false,
}

export default function blogReducer(state = initialState, action = {}) {
  switch(action.type) {
    case types.FETCH_BLOGS:
      return {
        ...state,
        fetchingPosts: true,
      };
    case types.FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        fetchingPosts: false,
        posts: action.data,
        error: false,
      };
    case types.FETCH_BLOGS_FAILURE:
      return {
        ...state,
        fetchingPosts: false,
        error: true,
      }
    default:
      return state;
  }
}

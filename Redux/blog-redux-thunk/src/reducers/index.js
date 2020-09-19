import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.fetchPosts:
      return action.payload;
    default:
      return state;
  }
}
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.fetchUser:
      return [...state, action.payload];
    default:
      return state;
  }
}
export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

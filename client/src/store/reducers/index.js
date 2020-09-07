import { combineReducers } from "redux";

// reducers
import toggle from "store/reducers/toggle.reducer";
import post from 'store/reducers/post.reducer';

export default combineReducers({
  toggle,
  post
});

import { combineReducers } from "redux";

// reducers
import toggleProfileDropdown from "store/reducers/toggleProfile.reducer";
import post from 'store/reducers/post.reducer';

export default combineReducers({
  toggleProfileDropdown,
  post
});

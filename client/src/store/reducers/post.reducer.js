import { GET_POSTS, GET_POST } from "store/actions/action.types";

const INITIAL_STATE = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case GET_POST:
      return {
				...state,
				post: payload,
				loading: false,
			};
    default:
      return state;
  }
}

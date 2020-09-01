import { TOGGLE_PROFILE_DROPDOWN } from "store/actions/action.types";

const INITIAL_STATE = {
  hidden: true,
};

export default function(state = INITIAL_STATE, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_PROFILE_DROPDOWN:
      return {
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

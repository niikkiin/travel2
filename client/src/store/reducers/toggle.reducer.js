import { TOGGLE_PROFILE_DROPDOWN } from "store/actions/action.types";

const INITIAL_STATE = {
  open: false,
};

export default function(state = INITIAL_STATE, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_PROFILE_DROPDOWN:
      return {
        open: !state.open,
      };
    default:
      return state;
  }
};

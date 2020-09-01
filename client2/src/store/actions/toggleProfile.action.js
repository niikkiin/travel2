import { TOGGLE_PROFILE_DROPDOWN } from "./action.types"

// toggle profile
export const toggleProfileDropdown = () => dispatch => {
  dispatch({
    type: TOGGLE_PROFILE_DROPDOWN
  })
}
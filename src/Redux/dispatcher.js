import { setUserData } from "./action"

export function setUserDetails(user) {
  return async dispatch => {
    dispatch(setUserData(user))
  }
}
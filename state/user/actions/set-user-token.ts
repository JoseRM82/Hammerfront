import { AppReduxMiddleware } from "../..";
import { USER_TYPE } from "../../../shared/constants/local";
import userState from '..'
import { UserType } from "../types";

const setUserToken = (userType: UserType | null): AppReduxMiddleware => {
  return (dispatch) => {
    dispatch(userState.actions.setUserType(userType))

    if (userType) {
      localStorage.setItem(USER_TYPE, userType)
    } else {
      localStorage.removeItem(USER_TYPE)
    }
  }
}

export default setUserToken
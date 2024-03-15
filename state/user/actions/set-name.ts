import { AppReduxMiddleware } from "../..";
import { USER_NAME } from "../../../shared/constants/local";
import userState from '..'
import { UserInfo } from "../types";

const setName = (userInfo: UserInfo): AppReduxMiddleware => {
  return (dispatch) => {
    dispatch(userState.actions.setUserInfo(userInfo))
    const userName = `${userInfo.name} ${userInfo.last_name}`

    if (userInfo) {
      localStorage.setItem(USER_NAME, userName)
    } else {
      localStorage.removeItem(USER_NAME)
    }
  }
}

export default setName
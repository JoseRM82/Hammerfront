import { AppReduxMiddleware } from "../..";
import userState from '../../user'
import { USER_TOKEN } from "../../../shared/constants/local";

const setToken = (token: string | null): AppReduxMiddleware => {
  return (dispatch) => {
    dispatch(userState.actions.setTokenUser(token))

    if (token) {
      localStorage.setItem(USER_TOKEN, token)
    } else {
      localStorage.removeItem(USER_TOKEN)
    }
  }
}

export default setToken
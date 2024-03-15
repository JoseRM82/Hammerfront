import { AppReduxMiddleware } from "../..";
import { USER_ID } from "../../../shared/constants/local";
import userState from '..'

const setId = (userId: string): AppReduxMiddleware => {
  return () => {
    if (userId) {
      localStorage.setItem(USER_ID, userId)
    } else {
      localStorage.removeItem(USER_ID)
    }
  }
}

export default setId
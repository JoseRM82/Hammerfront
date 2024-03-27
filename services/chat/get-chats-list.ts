import { USER_ID, USER_TOKEN, USER_TYPE } from "../../shared/constants/local";
import { get } from "../../shared/utils/FETCH";

const getChatsList = async (): Promise<Response> => {
  try {
    const userId = localStorage.getItem(USER_ID)
    const userType = localStorage.getItem(USER_TYPE)

    const response = await get('chats/get-own-chats', '', {
      'userid': userId,
      'usertype': userType,
    })

    return response

  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

interface Response {
  success: boolean;
  data?: any;
}

export default getChatsList
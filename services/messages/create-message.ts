import { USER_TOKEN, USER_TYPE } from "../../shared/constants/local";
import { post } from "../../shared/utils/FETCH";

const createMessage = async (message: string, chat_id: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    const userType = localStorage.getItem(USER_TYPE)

    const response = await post('messages', { message, userType, chat_id }, {
      'authorization': token
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

export default createMessage
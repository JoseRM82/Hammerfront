import { USER_TYPE } from "../../shared/constants/local";
import { get } from "../../shared/utils/FETCH";

const getMessages = async (chat_id: string): Promise<Response> => {
  try {
    const userType = localStorage.getItem(USER_TYPE)

    const response = await get('chats/get-a-chat', '', {
      'chatid': chat_id,
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

export default getMessages
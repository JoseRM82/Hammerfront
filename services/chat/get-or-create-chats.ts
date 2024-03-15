import { USER_TOKEN, USER_TYPE } from "../../shared/constants/local";
import { post } from "../../shared/utils/FETCH";

const getOrCreateChats = async (id: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    const userType = localStorage.getItem(USER_TYPE)

    console.log('userID: ', id)

    const response = await post('chats', { id, userType, token })

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

export default getOrCreateChats
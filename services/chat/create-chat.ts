import { post } from "../../shared/utils/FETCH";

const createChat = async(user_id: string, otherPersonId: string, userType: string): Promise<Response> => {
  try {
    const response = await post('chats/create-chat', {user_id, otherPersonId, userType})

    return response
  } catch(error) {
    return {success: false}
  }
}

interface Response {
  success: boolean;
  data?: any;
}

export default createChat
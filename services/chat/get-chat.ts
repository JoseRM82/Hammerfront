import { post } from "../../shared/utils/FETCH";

const getChat = async (otherPersonId: string, ownId: string, user_type: string): Promise<Response> => {
  try {
    const response = await post('chats/get-a-chat', { other_person_id: otherPersonId, user_type: user_type, own_id: ownId })

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

export default getChat
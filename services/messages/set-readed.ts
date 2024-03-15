import { post } from "../../shared/utils/FETCH";

const setReadedMessages = async (chat_id: string): Promise<Response> => {
  try {
    const response = await post('messages/read', { chat_id })

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

export default setReadedMessages
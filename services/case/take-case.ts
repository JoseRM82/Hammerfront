import { USER_TOKEN } from '../../shared/constants/local';
import { post } from '../../shared/utils/FETCH'

const takeCase = async (request_id: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)

    const body = {request_id: request_id, token: token}

    const response = await post('cases/set-lawyer', body, {
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

export default takeCase
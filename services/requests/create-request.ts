import { USER_TOKEN } from '../../shared/constants/local';
import { post } from '../../shared/utils/FETCH'

const createRequest = async (case_id: string, lawyer_id: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)

    const response = await post('requests', { case_id, lawyer_id }, {
      'authorization': `${token}`
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

export default createRequest
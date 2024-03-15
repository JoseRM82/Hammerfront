import { USER_TOKEN } from '../../shared/constants/local';
import { get } from '../../shared/utils/FETCH'

const getRequests = async (userType: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)

    const response = await get('requests/', userType, {
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

export default getRequests
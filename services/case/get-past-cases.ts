import { USER_TOKEN } from '../../shared/constants/local';
import { get } from '../../shared/utils/FETCH'

const getPastCases = async (userType: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)

    const response = await get('cases/past/', userType, {
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

export default getPastCases
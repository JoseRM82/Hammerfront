import { USER_TOKEN } from '../../shared/constants/local';
import { get } from '../../shared/utils/FETCH'

const getCurrentCases = async (userType: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)

    const response = await get('cases/', userType, {
      'authorization': `${token}`,
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

export default getCurrentCases
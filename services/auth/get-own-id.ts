import { USER_TOKEN, USER_TYPE } from "../../shared/constants/local";
import { get } from "../../shared/utils/FETCH";

const getOwnId = async (): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    const userType = localStorage.getItem(USER_TYPE)

    const response = await get('ownid', '', {
      'authorization': token,
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

export default getOwnId
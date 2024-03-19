import { get } from "../../shared/utils/FETCH";
import { USER_TOKEN, USER_TYPE } from "../../shared/constants/local";

const getRequestedFiles = async (case_id: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    const userType = localStorage.getItem(USER_TYPE)

    const response = await get('cases/needed-files/', case_id, {
      'authorization': token,
      'userType': userType,
    })

    return response
    
  } catch(error) {
    console.error(error)
    return {success: false}
  }
}

interface Response {
  success: boolean;
  data?: any;
}

export default getRequestedFiles
import { USER_TOKEN, USER_TYPE } from "../../shared/constants/local";
import { get } from "../../shared/utils/FETCH";

const tokenCheck = async (): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    const userType = localStorage.getItem(USER_TYPE) === 'client' ? 'clients' : 'lawyer' ? 'lawyers' : ''

    if(token && userType) {
      const response = await get(userType, token)
      
      return response
      
    } else {
      return {success: false}
    }

  } catch(error) {
    console.error(error)
    return {success: false}
  }
}

interface Response {
  success: boolean;
  data?: Data;
}

interface Data {
  name: string;
  last_name: string;
}

export default tokenCheck
import { post } from "../../shared/utils/FETCH";

const createToken = async(user_type: string, first_name: string, last_name: string, email:string, password: string): Promise<Response> => {
  try {
    const userType = user_type === 'lawyer' ? 'lawyers' : 'clients'

    const body = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    }

    const response = await post(`${userType}/create-token`, body)

    return response
  } catch(error) {
    return {success: false, data: ''}
  }
}

interface Response {
  success: boolean;
  data: string;
}

export default createToken
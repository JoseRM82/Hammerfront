import { post } from "../../shared/utils/FETCH";

const validateEmail = async(user_type: string, email: string): Promise<Response> => {
  try {
    const userType = user_type === 'lawyer' ? 'lawyers' : 'clients'

    const body = {email: email}

    const response = await post(`${userType}/validate-email`, body)

    return response
    
  } catch(error) {
    return {success: false}
  }
}

interface Response {
  success: boolean;
}

export default validateEmail
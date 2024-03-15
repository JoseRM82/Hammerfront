import { post } from "../../shared/utils/FETCH";

const login = async (email: string, password: string, userType: string): Promise<Response> => {
  try {
    const response = await post(`login`, { email, password, userType })

    return response

  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

interface Response {
  success: boolean;
  data?: string;
}

export default login
import { post } from "../../shared/utils/FETCH";
import { UserType } from "../../state/user/types";

const pathUserType = {
  [UserType.Client]: 'clients',
  [UserType.Lawyer]: 'lawyers',
}

const preRegister = async (email: string, first_name: string, last_name: string, userType: UserType): Promise<Response> => {
  try {
    const response: any = await post(`${pathUserType[userType]}/`, {
      first_name,
      last_name,
      email,
    })

    return response

  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

export default preRegister

interface Response {
  success: boolean;
  data?: Data;
}

interface Data {
  token: string
}
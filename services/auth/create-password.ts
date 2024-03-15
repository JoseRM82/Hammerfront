import { post } from "../../shared/utils/FETCH";
import { UserType } from "../../state/user/types";
import { USER_TOKEN } from "../../shared/constants/local";

const pathUserType = {
  [UserType.Client]: 'clients',
  [UserType.Lawyer]: 'lawyers',
}

const createPassword = async (password: string, userType: UserType): Promise<Response> => {
  try {
    const response: any = await post(`${pathUserType[userType]}/password`, { password }, {
      'authorization': `${localStorage.getItem(USER_TOKEN)}`
    })

    return response

  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

export default createPassword

interface Response {
  success: boolean;
}
import { patch } from "../../shared/utils/FETCH";
import { UserType } from "../../state/user/types";
import { USER_TOKEN } from "../../shared/constants/local";

const pathUserType = {
  [UserType.Client]: 'clients',
  [UserType.Lawyer]: 'lawyers',
}

const setInfo = async (body: Body, userType: UserType): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)

    const userData: Body = {
      identification: body.identification,
      birthdate: body.birthdate,
      country: body.country,
      state: body.state,
      city: body.city,
      adress: body.adress,
      zip_code: body.zip_code,
      languages: body.languages,
      phone: body.phone
    }

    const response: any = await patch(`${pathUserType[userType]}/${token}`, '', { userData }, {
      'authorization': `${localStorage.getItem(USER_TOKEN)}`
    })

    return response

  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

export default setInfo

interface Response {
  success: boolean;
}

interface Body {
  identification: string,
  birthdate: string,
  country: string,
  state: string,
  city: string,
  adress: string,
  zip_code: string,
  languages: string,
  phone: string,
}
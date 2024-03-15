import { patch } from "../../shared/utils/FETCH";
import { USER_TOKEN } from "../../shared/constants/local";

const setClientInfo = async (body: Body): Promise<Response> => {
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
      phone_number: body.phone_number
    }

    const response: any = await patch(`clients/update`, '', { userData }, {
      'authorization': `${token}`
    })

    return response

  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

export default setClientInfo

interface Response {
  success: boolean;
  data?: any;
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
  phone_number: string,
}
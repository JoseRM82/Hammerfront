import { USER_TOKEN } from "../../shared/constants/local";
import { post } from "../../shared/utils/FETCH";

const createCase = async (body: Body): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)

    const caseData: Body = {
      phone_number: body.phone_number,
      email: body.email,
      city: body.city,
      state: body.state,
      country: body.country,
      adress: body.adress,
      languages: body.languages,
      case_type: body.case_type,
      description: body.description,
    }

    const response: any = await post(`cases`, { caseData }, {
      'authorization': `${token}`
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

interface Body {
  phone_number: string;
  email: string;
  city: string;
  state: string;
  country: string;
  adress: string;
  languages: string;
  case_type: string;
  description: string;
}

export default createCase
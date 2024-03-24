import { post } from "../../shared/utils/FETCH";
import { Data, State } from "../../state/client-info/types";

const createClient = async(body: Data, first_name: string, last_name: string, email: string, password: string, token: string): Promise<Response> => {
    try {
      const userData: Data = {
        identification: body.identification,
        birthdate: body.birthdate,
        country: body.country,
        zip_code: body.zip_code,
        languages: body.languages,
        phone_number: body.phone_number
      }

      const client: State = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        data: userData,
        token: token,
      }

      const response = await post(`clients/create-user`, client)
  
      return response

  } catch(error) {
    return {success: false, data: ''}
  }
}

interface Response {
  success: boolean;
  data: string;
}

export default createClient
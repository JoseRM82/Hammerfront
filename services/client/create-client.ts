import { post } from "../../shared/utils/FETCH";
import { Data, State } from "../../state/client-info/types";
import { useAppSelector } from "../../state";

const createClient = async(body: Data): Promise<Response> => {
    try {
      const {first_name, last_name, email, password, token} = useAppSelector(state => state.clientState)

      const userData: Data = {
        identification: body.identification,
        birthdate: body.birthdate,
        country: body.country,
        zip_code: body.zip_code,
        languages: body.languages,
        phone_number: body.phone_number
      }

      const lawyer: State = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        data: userData,
        token: token,
      }
  
      const response = await post(`clients/create-user`, lawyer)
  
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
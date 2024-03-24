import { post } from "../../shared/utils/FETCH";
import { Data, State } from "../../state/lawyer-info/types";
import { useAppSelector } from "../../state";

const createLawyer = async(body: Data): Promise<Response> => {
    try {
      const {first_name, last_name, email, password, token} = useAppSelector(state => state.lawyerState)

      const userData: Data = {
        identification: body.identification,
        university: body.university,
        specialty_branch: body.specialty_branch,
        experience_time: body.experience_time,
        birthdate: body.birthdate,
        country: body.country,
        work_area: body.work_area,
        zip_code: body.zip_code,
        languages: body.languages,
        phone_number: body.phone_number,
        photo: body.photo,
      }

      const lawyer: State = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        token: token,
        data: userData,
      }
  
      const response = await post(`lawyers/create-user`, lawyer)
  
      return response

  } catch(error) {
    return {success: false, data: ''}
  }
}

interface Response {
  success: boolean;
  data: string;
}

export default createLawyer
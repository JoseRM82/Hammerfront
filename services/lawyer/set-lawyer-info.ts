import { patch } from "../../shared/utils/FETCH";
import { USER_TOKEN } from "../../shared/constants/local";

const setLawyerInfo = async (body: Body): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)

    const userData: Body = {
      identification: body.identification,
      university: body.university,
      specialty_branch: body.specialty_branch,
      graduated_at: body.graduated_at,
      birthdate: body.birthdate,
      country: body.country,
      city: body.city,
      adress: body.adress,
      work_area: body.work_area,
      zip_code: body.zip_code,
      languages: body.languages,
      phone_number: body.phone_number,
      photo: body.photo,
      description: body.description,
    }

    const response: any = await patch(`lawyers/update`, '', { userData }, {
      'authorization': `${token}`
    })

    return response

  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

export default setLawyerInfo

interface Response {
  success: boolean;
}

interface Body {
  identification: string,
  university: string,
  specialty_branch: string,
  graduated_at: string,
  birthdate: string,
  country: string,
  city: string,
  adress: string,
  work_area: string,
  zip_code: string,
  languages: string,
  phone_number: string,
  photo: string,
  description: string,
}
import { post } from "../../shared/utils/FETCH";
import { USER_TOKEN, USER_TYPE } from "../../shared/constants/local";

const updateDbFiles = async (ext: string, case_id: string, file_name: string, file_url?: string, key?: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    const user_type = localStorage.getItem(USER_TYPE)

    const body = {
      file_url: file_url,
      case_id: case_id,
      file_name: file_name,
      ext: ext,
      key: key,
    }

    const response = await post('cases/update-needed-files', body, {
      'authorization': token,
      'usertype': user_type,
    })

    return response

  } catch(error) {
    return {success: false}
  }
}

interface Response {
  success: boolean;
  data?: any
}

export default updateDbFiles
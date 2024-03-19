import { post } from "../../shared/utils/FETCH";
import { USER_TYPE, USER_TOKEN } from "../../shared/constants/local";

const deleteFileFromS3 = async (file_name: string, case_id: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    const user_type = localStorage.getItem(USER_TYPE)

    const body = {
      file_name: file_name,
      case_id: case_id,
    }

    const response = await post('cases/delete-file-s3', body, {
      'authorization': token,
      'usertype': user_type,
    })

    return response

  } catch (error) {
    return {success: false}
  }
}

interface Response {
  success: boolean;
  data?: any;
}

export default deleteFileFromS3
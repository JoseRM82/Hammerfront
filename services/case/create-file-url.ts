import { post } from "../../shared/utils/FETCH";
import { USER_TYPE, USER_TOKEN } from "../../shared/constants/local";

const sendFile = async (form: Data): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    const userType = localStorage.getItem(USER_TYPE)
    const file_data = new FormData()
    const extArray = form.file.name.split('.')
    const ext = extArray[extArray.length -1]

    file_data.append('file', form.file)

    const response = await post('cases/upload-file', file_data, {
      'authorization': token,
      'usertype': userType,
      'ext': ext,
    },'',false, true)

    return response

  } catch(error) {
    console.error(error)
    return {success: false}
  }
}

interface Response {
  success: boolean;
  data?: any;
}

interface Data {
  file: File;
}

export default sendFile
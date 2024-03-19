import { USER_TYPE, USER_TOKEN } from "../../shared/constants/local";
import { post } from "../../shared/utils/FETCH";

const registerFile = async (file: string, case_id: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    const userType = localStorage.getItem(USER_TYPE)

    const body: Body = {
      neededFile: file,
      caseId: case_id,
    }

    const response = await post('cases/update-needed-files', body, {
      'authorization': token,
      'userType': userType,
    })

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

interface Body {
  neededFile: string;
  caseId: string;
}

export default registerFile
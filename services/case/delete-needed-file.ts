import { USER_TOKEN, USER_TYPE } from "../../shared/constants/local";
import { post } from "../../shared/utils/FETCH";

const deleteNeededFile = async (fileName: string, caseId: string): Promise<Response> => {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    const userType = localStorage.getItem(USER_TYPE)

    const body = {
      needed_file: fileName,
      case_id: caseId,
    }

    const response: Response = await post(`cases/delete-needed-file`, body, {
      'authorization': `${token}`,
      'userType': `${userType}`,
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

export default deleteNeededFile
import { post } from "../../shared/utils/FETCH";

export const leaveCase = async(case_id: string, user_type: string, own_id: string):Promise<Response> => {
  try {
    const body = {
      case_id: case_id,
      user_type: user_type,
      own_id: own_id,
    }

    const response = await post('cases/leave-case', body)

    return response

  } catch(error) {
    return {success: false}
  }
}

interface Response {
  success: boolean;
  data?: any;
}
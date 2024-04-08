import { post } from "../../shared/utils/FETCH";

export const postCalendarMemo = async(user_type: string, own_id: string, date: Date, note: string, case_id?: string):Promise<Response> => {
  try {
    const body = {
      user_type: user_type,
      own_id: own_id,
      date: date,
      note: note,
      case_id: case_id,
    }

    const response = await post('calendar/post-memo', body)

    return response

  } catch(error) {
    return {success: false}
  }
}

interface Response {
  success: boolean;
  data?: any;
}
import { post } from "../../shared/utils/FETCH";

const postNote = async(note: string, date: string, user_id: string): Promise<Response> => {
  try{
    const body = {
      user_id: user_id,
      date: date,
      note: note,
    }
    const response = await post('notes', body)

    return response

  } catch(error) {
    return {success: false}
  }
}

interface Response {
  success: boolean;
}

export default postNote
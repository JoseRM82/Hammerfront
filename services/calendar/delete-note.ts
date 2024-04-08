import { post } from "../../shared/utils/FETCH";

const deleteNote = async(note: string, user_id: string): Promise<Response> => {
  try {
    const body = {
      user_id: user_id,
      note: note,
    }

    const response = await post('notes/delete', body)

    return response

  } catch(error) {
    return {success: false}
  }
}

interface Response {
  success: boolean;
}

export default deleteNote
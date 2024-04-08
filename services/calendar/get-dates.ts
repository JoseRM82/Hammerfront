import { get } from "../../shared/utils/FETCH";

export const getNotes = async(own_id: string):Promise<Response> => {
  try {
    const user_id = own_id

    const response = await get('notes/', user_id)

    return response

  } catch(error) {
    return {success: false, data: []}
  }
}

interface Response {
  success: boolean;
  data: Notes[];
}

interface Notes {
  date: string;
  note: string;
}
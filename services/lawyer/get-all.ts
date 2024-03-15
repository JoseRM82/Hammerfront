import { get } from '../../shared/utils/FETCH'

const getLawyers = async (city?: string, language?: string, case_type?: string): Promise<Response> => {
  try {
    const response = await get('lawyers')

    return response

  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

interface Response {
  success: boolean;
  data?: any;
}

export default getLawyers
import { State, Data } from "./types";

export const initialData: Data = {
  identification: '',
  university: '',
  specialty_branch: '',
  experience_time: '',
  birthdate: '',
  country: '',
  work_area: '',
  zip_code: '',
  languages: '',
  phone_number: '',
  photo: '',
}

const initialState: State = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  data: initialData,
  token: '',
}

export default initialState
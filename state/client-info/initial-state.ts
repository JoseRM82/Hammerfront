import { Data, State } from "./types";

const initialData: Data = {
  identification: '',
  birthdate: '',
  country: '',
  zip_code: '',
  languages: '',
  phone_number: '',
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
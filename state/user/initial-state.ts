import { Data, State, UserInfo } from './types'

const initialData: Data = {
  identification: '',
  university: '',
  specialty_branch: '',
  graduated_at: '',
  birthdate: '',
  country: '',
  state: '',
  city: '',
  adress: '',
  work_area: '',
  zip_code: '',
  languages: '',
  phone_number: '',
  photo: '',
  own_description: '',
}

const initialInfo: UserInfo = {
  name: '',
  last_name: '',
}

const initialState: State = {
  type: null,
  token: null,
  userInfo: initialInfo,
  userId: null,
  data: initialData,
}

export default initialState
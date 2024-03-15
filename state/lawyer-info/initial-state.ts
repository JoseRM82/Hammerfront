import { State, Photo } from "./types";

const initialPhoto: Photo = {
  photoLocation: '',
  photoName: '',
}

const initialState: State = {
  tuition_id: '',
  university: '',
  specialty_branch: '',
  graduated_at: '',
  birthdate: '',
  country: '',
  city: '',
  adress: '',
  work_area: '',
  zip_code: '',
  languages: '',
  phone_number: '',
  photo: initialPhoto,
  own_description: '',
}

export default initialState
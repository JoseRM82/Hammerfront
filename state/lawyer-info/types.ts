export interface State {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  data: Data;
  token: string,
}

export interface Data {
  identification: string;
  university: string;
  specialty_branch: string;
  experience_time: string;
  birthdate: string;
  country: string;
  work_area: string;
  zip_code: string;
  languages: string;
  phone_number: string;
  photo: string;
}


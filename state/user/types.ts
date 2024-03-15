export interface State {
  type: UserType | null;
  token: string | null;
  data: Data;
}

export enum UserType {
  Client = 'client',
  Lawyer = 'lawyer',
}

export interface Data {
  identification: string;
  university: string;
  specialty_branch: string;
  graduated_at: string;
  birthdate: string;
  country: string;
  state: string;
  city: string;
  adress: string;
  work_area: string;
  zip_code: string;
  languages: string;
  phone_number: string;
  photo: string;
  own_description: string;
}

// export interface Photo {
//   photoLocation: string;
//   photoName: string;
// }
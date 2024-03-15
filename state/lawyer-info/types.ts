export interface State {
  tuition_id: string;
  university: string;
  specialty_branch: string;
  graduated_at: string;
  birthdate: string;
  country: string;
  city: string;
  adress: string;
  work_area: string;
  zip_code: string;
  languages: string;
  phone_number: string;
  photo: Photo;
  own_description: string;
}

export interface Photo {
  photoLocation: string;
  photoName: string;
}
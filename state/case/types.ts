export interface State {
  client_name: string,
  next_court: string,
  case_type: string,
  needed_file: string,
  file_name: string,
  language: string,
  judgement_location: JudgementLocation,
  case_description: string,
  file_sent: boolean,
  file_deleted: boolean,
}

export interface JudgementLocation {
  city: string,
  state: string,
  country: string,
  adress: string,
}
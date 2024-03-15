export interface State {
  client_name: string,
  next_court: string,
  case_type: string,
  needed_files: string,
  language: string,
  judgement_location: JudgementLocation,
  case_description: string,
}

export interface JudgementLocation {
  city: string,
  state: string,
  country: string,
  adress: string,
}
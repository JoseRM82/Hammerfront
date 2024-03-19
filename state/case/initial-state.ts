import { State, JudgementLocation } from './types'

const initialLocation: JudgementLocation = {
  city: '',
  state: '',
  country: '',
  adress: '',
}

const initialstate: State = {
  client_name: '',
  case_type: '',
  next_court: '',
  needed_file: '',
  file_name: '',
  judgement_location: initialLocation,
  file_sent: false,
  language: '',
  case_description: '',
  file_deleted: false,
}

export default initialstate
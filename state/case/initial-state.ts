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
  needed_files: '',
  judgement_location: initialLocation,
  language: '',
  case_description: '',
}

export default initialstate
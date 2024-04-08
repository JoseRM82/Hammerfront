import { State, Citations, Notes, Information } from "./types";

export const initialCitations: Citations = {
  citation: '',
}

export const initialNotes: Notes = {
  note: '',
}

export const initialInformation: Information = {
  notes: [],
  citations: [],
}

export const initialState: State = {
  calendar_information: {}
}
export interface State {
  calendar_information: Record<string, Information>,
}

export interface Information {
  notes: Notes[],
  citations: Citations[],
}

export interface Notes {
  note: string,
}

export interface Citations {
  citation: string,
}

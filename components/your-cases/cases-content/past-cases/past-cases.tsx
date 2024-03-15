import { FunctionComponent, useState } from "react";

import PastCasesCard from '../actual-cases/cases-card'
import { useAppSelector } from "../../../../state";

const PastCases: FunctionComponent<Props> = ({ className }) => {
  const [selectedId, setSelectedId] = useState('')
  const { client, lawyer, pastCases } = useAppSelector(state => state.globalState)

  const onClickCase = (id: string) => {
    if (selectedId === id) {
      setSelectedId('')
    } else {
      setSelectedId(id)
    }
  }

  return (
    <div className={className}>
      <div className="past-cases">
        <div className="past-cases-categories">ID</div>
        <div className="past-cases-categories">Start Date</div>
        <div className="past-cases-categories">End Date</div>
        <div className="past-cases-categories">Location</div>
        <div className="past-cases-categories">Case type</div>
      </div>
      <div className="past-cases-list">
        {pastCases.length > 0
          ? pastCases.map(x => (
            <PastCasesCard key={x._id} showAllInfo={selectedId === x._id} onClick={() => onClickCase(x._id)} firstFieldText='ID: ' firstField={x._id} secondFieldText='Start Date: ' secondField={x.start_date} thirdFieldText='End Date: ' thirdField={x.end_date} fourthFieldText='Location: ' fourthField={`${x.data.country}, ${x.data.city}`} fifthFieldText='Case Type: ' fifthField={x.data.case_type} sixthFieldText='Name: ' sixthField={client ? x.lawyer_name : (lawyer ? x.client_name : '')} seventhFieldText='Email: ' seventhField={x.data.email} eighthFieldText='Language: ' eighthField={x.data.languages} ninethFieldText='Description: ' ninethField={x.data.description} />
          ))
          : <div className="past-cases-categories" >There are no past cases yet</div>
        }
      </div>
    </div>
  )
}

export default PastCases

interface Props {
  className?: string;
}
import { FunctionComponent, useState, useEffect } from "react";

import PastCasesCard from '../current-cases/cases-card'
import { useAppSelector } from "../../../../state";
import getPastCases from "../../../../services/case/get-past-cases";
import { USER_TOKEN, USER_TYPE } from "../../../../shared/constants/local";

const PastCases: FunctionComponent<Props> = ({ className }) => {
  const [selectedId, setSelectedId] = useState('')
  const [cases, setCases] = useState<Cases[]>([])
  const { client, lawyer } = useAppSelector(state => state.globalState)

  useEffect(() => {
    const userType = localStorage.getItem(USER_TYPE)
    const userToken = localStorage.getItem(USER_TOKEN)
    
    if (userType && userToken) {
        getPastCases(userType)
          .then(response => {
            if (response.success) {
              const cases = response.data;
        
              setCases(cases)
            }
          }).catch(error => console.error(error))
    }

  }, [])

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
        {cases.length > 0
          ? cases.map(x => (
            <PastCasesCard key={x._id} showAllInfo={selectedId === x._id} onClick={() => onClickCase(x._id)} firstFieldText='ID: ' firstField={x._id} secondFieldText='Start Date: ' secondField={x.start_date} thirdFieldText='End Date: ' thirdField={x.end_date} fourthFieldText='Location: ' fourthField={`${x.data.country}, ${x.data.city}`} fifthFieldText='Case Type: ' fifthField={x.data.case_type} sixthFieldText='Name: ' sixthField={client ? x.lawyer_name! : (lawyer ? x.client_name! : '')} seventhFieldText='Email: ' seventhField={x.data.email} eighthFieldText='Language: ' eighthField={x.data.languages} ninethFieldText='Description: ' ninethField={x.data.description} />
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

interface Cases {
  _id: string;
  client_name?: string; 
  lawyer_name?: string; 
  start_date: string;
  end_date: string;
  data: Data;
}

interface Data {
  description: string;
  languages: string;
  email: string;
  case_type: string;
  country: string;
  city: string;
}
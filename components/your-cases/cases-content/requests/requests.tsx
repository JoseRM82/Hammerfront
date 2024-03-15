import { FunctionComponent, useEffect, useState } from "react";

import takeCase from "../../../../services/case/take-case";
import declineRequest from "../../../../services/requests/decline-request";
import { useAppSelector } from "../../../../state";
import RequestsCard from "../current-cases/cases-card";
import getPastCases from "../../../../services/case/get-past-cases";
import { USER_TOKEN, USER_TYPE } from "../../../../shared/constants/local";

const Requests: FunctionComponent<Props> = ({ className }) => {
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

  const onAccept = (request_id: any) => {
    takeCase(request_id)
  }

  const onRefuse = (request_id: any) => {
    declineRequest(request_id)
  }

  const onClickRequest = (id: string) => {
    if (selectedId === id) {
      setSelectedId('')
    } else {
      setSelectedId(id)
    }
  }

  return (
    <div className={className}>
      <div className="requests">
        <div className="requests-categories">Request date</div>
        <div className="requests-categories">Name</div>
        <div className="requests-categories">Language</div>
        <div className="requests-categories">Location</div>
        <div className="requests-categories">Case type</div>
      </div>
      <div className="requests-list">
        {cases.length > 0
          ? cases.map(x => (
            <RequestsCard key={x._id} onAccept={() => onAccept(selectedId)} onRefuse={() => onRefuse(selectedId)} showAllInfo={selectedId === x._id} requests onClick={() => onClickRequest(x._id)} firstFieldText='Request Date: ' firstField={`${new Date(x.sent_date).getFullYear()}-${new Date(x.sent_date).getMonth()}-${new Date(x.sent_date).getDate()}`} secondFieldText='Name: ' secondField={client ? x.lawyer_name : (lawyer ? x.client_name : '')} thirdFieldText='Language: ' thirdField={x.case_languages} fourthField={x.case_location} fifthFieldText='Case Type: ' fifthField={x.case_type} seventhFieldText='Description: ' seventhField={x.case_description} />
          ))
          : <div className="requests-categories" >There are no requests yet</div>
        }
      </div>
    </div>
  )
}

export default Requests

interface Props {
  className?: string;
}

interface Cases {
  _id: string;
  sent_date: string;
  lawyer_name?: string;
  client_name?: string;
  case_languages: string;
  case_description: string;
  case_location: string;
  case_type: string;
}
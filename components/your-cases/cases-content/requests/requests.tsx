import { FunctionComponent, MutableRefObject, useEffect, useState } from "react";
import { Drawer } from "antd";

import takeCase from "../../../../services/case/take-case";
import declineRequest from "../../../../services/requests/decline-request";
import { useAppSelector } from "../../../../state";
import RequestsCard from "../current-cases/cases-card";
import { USER_TOKEN, USER_TYPE } from "../../../../shared/constants/local";
import getRequests from "../../../../services/case/get-requests";
// import { initialCases, Cases as CompletedCases } from "../current-cases/current-cases";
import { LuxuryColors } from "../../../../utils/styles";

const Requests: FunctionComponent<Props> = ({ className, tourRef }) => {
  const [cases, setCases] = useState<Cases[]>([])
  const [selectedCase, setSelectedCase] = useState<Cases>(initialRequest)
  const [open, setOpen] = useState<boolean>(false)
  const { client, lawyer } = useAppSelector(state => state.globalState)
  const {guideAvailable, guideCaseOpen} = useAppSelector(state => state.guideState)

  useEffect(() => {
    const userType = localStorage.getItem(USER_TYPE)
    const userToken = localStorage.getItem(USER_TOKEN)
    
    if (userType && userToken) {
        getRequests(userType)
          .then(response => {
            if (response.success) {
              const cases = response.data;
        
              setCases(cases)
            }
          }).catch(error => console.error(error))
    }

  }, [])

  const onAccept = (request_id: any) => {
    !guideAvailable ? takeCase(request_id) : null
  }

  const onRefuse = (request_id: any) => {
    !guideAvailable ? declineRequest(request_id) : null
  }

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div className={className}>
        {
          cases.length > 0
            ? 
            <div className="requests-list" ref={tourRef?.requestsStep}>
              {cases.map(x => (
                <RequestsCard key={x._id} requests onClick={() => {setSelectedCase(x); toggleDrawer()}} firstFieldText='Request Date: ' firstField={`${new Date(x.sent_date).getFullYear()}-${new Date(x.sent_date).getMonth()}-${new Date(x.sent_date).getDate()}`} secondFieldText='Name: ' secondField={client ? x.lawyer_name : (lawyer ? x.client_name : '')} thirdFieldText='Language: ' thirdField={x.case_languages} fourthField={x.case_location} fifthFieldText='Case Type: ' fifthField={x.case_type} seventhFieldText='Description: ' seventhField={x.case_description} />
              ))}
            </div>
            : 
            <div className="requests-container">
              <div className="requests-categories" >There are no requests yet</div>
            </div>
        }
        <Drawer style={{background: LuxuryColors.darkButton, color: LuxuryColors.selected}} onClose={toggleDrawer} closeIcon={false} open={(open || guideCaseOpen)} >
          <RequestsCard key={selectedCase._id} onAccept={() => onAccept(selectedCase._id)} onRefuse={() => onRefuse(selectedCase._id)} showAllInfo={true} requests firstFieldText='Request Date: ' firstField={`${new Date(selectedCase.sent_date).getFullYear()}-${new Date(selectedCase.sent_date).getMonth()}-${new Date(selectedCase.sent_date).getDate()}`} secondFieldText='Name: ' secondField={client ? selectedCase.lawyer_name : (lawyer ? selectedCase.client_name : '')} thirdFieldText='Language: ' thirdField={selectedCase.case_languages} fourthField={selectedCase.case_location} fifthFieldText='Case Type: ' fifthField={selectedCase.case_type} seventhFieldText='Description: ' seventhField={selectedCase.case_description} />
        </Drawer>
    </div>
  )
}

export default Requests

interface Props {
  className?: string;
  tourRef?: Record<string, MutableRefObject<any>>;
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

const initialRequest = {
  _id: '',
  sent_date: '',
  lawyer_name: '',
  client_name: '',
  case_languages: '',
  case_description: '',
  case_location: '',
  case_type: '',
}
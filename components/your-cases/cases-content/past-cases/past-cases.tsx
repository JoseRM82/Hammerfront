import { FunctionComponent, useState, useEffect, MutableRefObject } from "react";
import { Drawer } from "antd";

import PastCasesCard from '../current-cases/cases-card'
import { useAppSelector } from "../../../../state";
import getPastCases from "../../../../services/case/get-past-cases";
import { USER_TOKEN, USER_TYPE } from "../../../../shared/constants/local";
import { LuxuryColors } from "../../../../utils/styles";

const PastCases: FunctionComponent<Props> = ({ className, tourRef }) => {
  const [selectedId, setSelectedId] = useState('')
  const [cases, setCases] = useState<Cases[]>([])
  const [selectedCase, setSelectedCase] = useState<Cases>(initialPast)
  const [open, setOpen] = useState<boolean>(false)
  const {guideAvailable, guideCaseOpen} = useAppSelector(state => state.guideState)
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

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div className={className}>
        {
          cases.length > 0
            ? 
            <div className="past-cases-list" ref={tourRef?.pastStep}>
              {cases.map(x => (
                <PastCasesCard key={x._id} onClick={() => {setSelectedCase(x); toggleDrawer()}} firstFieldText='ID: ' firstField={x._id} secondFieldText='Start Date: ' secondField={x.start_date} thirdFieldText='End Date: ' thirdField={x.end_date} fourthFieldText='Location: ' fourthField={`${x.data.country}, ${x.data.city}`} fifthFieldText='Case Type: ' fifthField={x.data.case_type} sixthFieldText='Name: ' sixthField={client ? x.lawyer_name! : (lawyer ? x.client_name! : '')} seventhFieldText='Email: ' seventhField={x.data.email} eighthFieldText='Language: ' eighthField={x.data.languages} ninethFieldText='Description: ' ninethField={x.data.description} />
              ))}
            </div>
            :
            <div className="past-cases-container">
              <div className="past-cases-categories" >There are no past cases yet</div>
            </div> 
        }
        <Drawer style={{background: LuxuryColors.darkButton, color: LuxuryColors.selected}} onClose={toggleDrawer} closeIcon={false} open={(open || guideCaseOpen)} >
          <PastCasesCard key={selectedCase._id} showAllInfo={true} firstFieldText='ID: ' firstField={selectedCase._id} secondFieldText='Start Date: ' secondField={selectedCase.start_date} thirdFieldText='End Date: ' thirdField={selectedCase.end_date} fourthFieldText='Location: ' fourthField={`${selectedCase.data.country}, ${selectedCase.data.city}`} fifthFieldText='Case Type: ' fifthField={selectedCase.data.case_type} sixthFieldText='Name: ' sixthField={client ? selectedCase.lawyer_name! : (lawyer ? selectedCase.client_name! : '')} seventhFieldText='Email: ' seventhField={selectedCase.data.email} eighthFieldText='Language: ' eighthField={selectedCase.data.languages} ninethFieldText='Description: ' ninethField={selectedCase.data.description} />
        </Drawer>
    </div>
  )
}

export default PastCases

interface Props {
  className?: string;
  tourRef?: Record<string, MutableRefObject<any>>;
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

const initialPast = {
  _id: '',
  client_name: '', 
  lawyer_name: '', 
  start_date: '',
  end_date: '',
  data: {
    description: '',
    languages: '',
    email: '',
    case_type: '',
    country: '',
    city: '',
  }
}
import { FunctionComponent, useEffect, useState } from "react";

import CasesCard from "./cases-card";
import getOrCreateChat from "../../../../services/chat/get-or-create-chats";
import getMessages from "../../../../services/messages/get-messages";
import getChatsList from "../../../../services/chat/get-chats-list";
import globalState from "../../../../state/global";
import getCurrentCases from "../../../../services/case/get-current-cases";
import { useAppDispatch, useAppSelector } from "../../../../state";
import { USER_TOKEN, USER_TYPE } from "../../../../shared/constants/local";
import { divideArray } from "../../../../shared/functions/array-functions";

const CurrentCases: FunctionComponent<Props> = ({ className }) => {
  const [openCard, setOpenCard] = useState(false)
  const [cases, setCases] = useState<Cases[]>([])
  const [firstCases, setFirstCases] = useState<Cases[]>([])
  const [selectedCase, setSelectedCase] = useState<Cases>(initialCases)
  const [lastCases, setLastCases] = useState<Cases[]>([])
  const { client, lawyer } = useAppSelector(state => state.globalState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const userType = localStorage.getItem(USER_TYPE)
    const userToken = localStorage.getItem(USER_TOKEN)
    
    if (userType && userToken) {
        getCurrentCases(userType)
          .then(response => {
            if (response.success) {
              const casesList = response.data;
        
              setCases(casesList)
            }
          }).catch(error => console.error(error))
    }

  }, [])

  const onClickCase = (x: Cases) => {
    if (selectedCase === x) {
      setSelectedCase(initialCases)
    } else {
      setSelectedCase(x)
    }
  }

  const onChat = (id: string) => {
    getOrCreateChat(id)
      .then(response => {
        if (response.success) {
          const chatId = response.data._id
          const userType = localStorage.getItem(USER_TYPE)

          dispatch(globalState.actions.setCurrentChatId(chatId))
          dispatch(globalState.actions.setMessageName(userType === 'client' ? response.data.lawyer_name : response.data.client_name))
          dispatch(globalState.actions.setChatIsOpen(true))

          getChatsList()
            .then(response => {
              if (response.success) {
                const chatList = response.data

                dispatch(globalState.actions.setChatsList(chatList))
              }
            })

          getMessages(chatId)
           .then(response => {
            if(response.success) {
              const messages = response.data

              dispatch(globalState.actions.setMessages(messages))
            }
           })
        }
      })
  }

  useEffect(() => {
    if(!selectedCase._id) return

    const heightY = document.getElementById(selectedCase._id + '')?.offsetTop
    const vheight = window.innerHeight / 2
    const divHeight = document.getElementById(selectedCase._id)?.clientHeight! / 2
    if (heightY) {
      scrollTo(0, heightY! - vheight + divHeight!)
    }
  }, [selectedCase])

  return (
    <div className={className}>
        {
          cases.length > 0
            ?
            <div className="current-cases-list">
              {cases.map(x => (
                <CasesCard key={x._id} card_id={x._id} showAllInfo={selectedCase === x} CurrentCases caseId={x._id} onClick={() => onClickCase(x)} onChat={() => onChat(client ? x.lawyer_id! : x.client_id!)} firstFieldText='Case ID: ' firstField={x._id + ''} secondFieldText={client ? 'Lawyer: ' : (lawyer ? 'Client: ' : '')} secondField={client ? (x.lawyer_name! ? x.lawyer_name! : 'No lawyer yet') : (lawyer ? x.client_name! : '')} thirdFieldText='Next Court Date: ' thirdField={x.next_court ? x.next_court : 'No date yet'}  fifthFieldText={x.status === 'in_progress' ? (client ? 'Status: ' : (lawyer ? 'Case Type: ' : '')) : ''} fifthField={client ? x.status : (lawyer ? x.data.case_type : '')} sixthFieldText='Needed Files: ' sixthField={x.needed_files.files_types!.length} seventhFieldText='Language: ' seventhField={x.data.languages} eighthFieldText='Judgement Location: ' eighthField={x.judgement_location ? x.judgement_location.court_adress : x.data.city} ninethFieldText='Case Description: ' ninethField={x.data.description} />
              ))}
            </div>
            : 
            <div className="current-cases-categories">There aren&apost cases yet</div>
        }
    </div>
  )
}

export default CurrentCases

interface Props {
  className?: string;
}

interface Cases {
  _id: string;
  client_id?: string;
  client_name?: string;
  lawyer_id?: string;
  lawyer_name?: string;
  next_court: string;
  needed_files: NeededFiles;
  data: Data;
  languages: string;
  judgement_location: Location;
  status: string;
}

interface Data {
  description: string;
  city: string;
  languages: string;
  case_type: string;
}

interface Location {
  court_adress: string;
}

interface NeededFiles {
  files_types?: string[]; 
  files_url?: Files_URL[];
}

interface Files_URL {
  name?: string;
  url?: string;
}

interface SelectedCase {
  arr1: Cases[],
  elem: Cases,
  arr2: Cases[],
}

const initialCases = {
  _id: '',
  client_id: '',
  client_name: '',
  lawyer_id: '',
  lawyer_name: '',
  next_court: '',
  needed_files: {
    files_types: [''], 
    files_url: [{
      name: '',
      url: '',
    }],
  },
  data: {
    description: '',
    city: '',
    languages: '',
    case_type: '',
  },
  languages: '',
  judgement_location: {
    court_adress: '',
  },
  status: '',
}
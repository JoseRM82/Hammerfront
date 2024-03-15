import { FunctionComponent, useEffect, useState } from "react";

import CasesCard from "./cases-card";
import getOrCreateChat from "../../../../services/chat/get-or-create-chats";
import getMessages from "../../../../services/messages/get-messages";
import getChatsList from "../../../../services/chat/get-chats-list";
import globalState from "../../../../state/global";
import getCurrentCases from "../../../../services/case/get-current-cases";
import { useAppDispatch, useAppSelector } from "../../../../state";
import { USER_TOKEN, USER_TYPE } from "../../../../shared/constants/local";

const CurrentCases: FunctionComponent<Props> = ({ className }) => {
  const [selectedId, setSelectedId] = useState('')
  const [cases, setCases] = useState<Cases[]>([])
  const { client, lawyer } = useAppSelector(state => state.globalState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const userType = localStorage.getItem(USER_TYPE)
    const userToken = localStorage.getItem(USER_TOKEN)
    
    if (userType && userToken) {
        getCurrentCases(userType)
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

  }, [])

  return (
    <div className={className}>
      <div className="current-cases">
        <div className="current-cases-categories">ID</div>
        <div className="current-cases-categories">{client ? 'Lawyer Name' : (lawyer ? 'Client Name' : '')}</div>
        <div className="current-cases-categories-sort">Next court</div>
        <div className="current-cases-categories-sort">Needed files</div>
        <div className="current-cases-categories-sort">{client ? 'Status' : (lawyer ? 'Case Type' : '')}</div>
      </div>
      <div className="current-cases-list">
        {
          cases.length > 0
            ? cases.map(x => (
              <CasesCard key={x._id} CurrentCases showAllInfo={selectedId === x._id} onClick={() => onClickCase(x._id)} onChat={() => onChat(client ? x.lawyer_id! : x.client_id!)} firstFieldText='Case ID: ' firstField={x._id + ''} secondFieldText={client ? 'Lawyer Name: ' : (lawyer ? 'Client Name: ' : '')} secondField={client ? (x.lawyer_name! ? x.lawyer_name! : 'No lawyer yet') : (lawyer ? x.client_name! : '')} thirdFieldText='Next Court Date: ' thirdField={x.next_court ? x.next_court : 'No date yet'} fourthField={x.needed_files ? x.needed_files.number : '0'} fifthFieldText={client ? 'Status: ' : (lawyer ? 'Case Type: ' : '')} fifthField={client ? x.status : (lawyer ? x.data.case_type : '')} sixthFieldText='Needed Files: ' sixthField={x.needed_files ? x.needed_files.types : '0'} seventhFieldText='Language: ' seventhField={x.data.languages} eighthFieldText='Judgement Location: ' eighthField={x.judgement_location ? x.judgement_location.court_adress : x.data.city} ninethFieldText='Case Description: ' ninethField={x.data.description} />
            ))
            : <div className="current-cases-categories">There aren't cases yet</div>
        }
      </div>
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
  client_name?: string
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
  number: number;
  types: string;
}
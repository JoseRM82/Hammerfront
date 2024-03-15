import { FunctionComponent, useEffect, useState } from "react";
import getOrCreateChats from "../../../../services/chat/get-or-create-chats";

import { useAppDispatch, useAppSelector } from "../../../../state";
import globalState from "../../../../state/global";
import CasesCard from "./cases-card";

const ActualCases: FunctionComponent<Props> = ({ className }) => {
  const [selectedId, setSelectedId] = useState('')
  const { client, lawyer, currentCases } = useAppSelector(state => state.globalState)
  const dispatch = useAppDispatch()

  const onClickCase = (id: string) => {
    if (selectedId === id) {
      setSelectedId('')
    } else {
      setSelectedId(id)
    }
  }

  const onChat = (id: string) => {
    getOrCreateChats(id)
      .then(response => {
        if (response.success) {
          const chatId = response.data._id

          dispatch(globalState.actions.setChatIsOpen(true))
          dispatch(globalState.actions.setCurrentChatId(chatId))
        }
      })
  }

  useEffect(() => {

  }, [])

  return (
    <div className={className}>
      <div className="actual-cases">
        <div className="actual-cases-categories">ID</div>
        <div className="actual-cases-categories">{client ? 'Lawyer Name' : (lawyer ? 'Client Name' : '')}</div>
        <div className="actual-cases-categories">Next court</div>
        <div className="actual-cases-categories">Needed files</div>
        <div className="actual-cases-categories">{client ? 'Status' : (lawyer ? 'Case Type' : '')}</div>
      </div>
      <div className="actual-cases-list">
        {
          currentCases.length > 0
            ? currentCases.map(x => (
              <CasesCard key={x._id} actualCases showAllInfo={selectedId === x._id} onClick={() => onClickCase(x._id)} onChat={() => onChat(client ? x.lawyer_id : x.client_id)} firstFieldText='Case ID: ' firstField={x._id + ''} secondFieldText={client ? 'Lawyer Name: ' : (lawyer ? 'Client Name' : '')} secondField={client ? (x.lawyer_name ? x.lawyer_name : 'No lawyer yet') : (lawyer ? x.client_name : '')} thirdFieldText='Next Court Date: ' thirdField={x.next_court ? x.next_court : 'No date yet'} fourthField={x.needed_files ? x.needed_files.number : '0'} fifthFieldText={client ? 'Status: ' : (lawyer ? 'Case Type: ' : '')} fifthField={client ? x.status : (lawyer ? x.data.case_type : '')} sixthFieldText='Needed Files: ' sixthField={x.needed_files ? x.neededFiles.types : '0'} seventhFieldText='Language: ' seventhField={x.data.languages} eighthFieldText='Judgement Location: ' eighthField={x.judgement_location ? x.judgement_location.court_adress : x.data.city} ninethFieldText='Case Description: ' ninethField={x.data.description} />
            ))
            : <div className="actual-cases-categories">There aren't cases yet</div>
        }
      </div>
    </div>
  )
}

export default ActualCases

interface Props {
  className?: string;
}
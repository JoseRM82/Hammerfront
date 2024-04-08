import { FunctionComponent, MutableRefObject, useCallback, useEffect, useState } from "react";
import {Drawer} from 'antd'
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

import CasesCard from "./cases-card";
import getChat from "../../../../services/chat/get-chat";
import globalState from "../../../../state/global";
import messageState from "../../../../state/message";
import chatState from "../../../../state/chat";
import calendarState from "../../../../state/calendar";
import getCurrentCases from "../../../../services/case/get-current-cases";
import { useAppDispatch, useAppSelector } from "../../../../state";
import { USER_ID, USER_TOKEN, USER_TYPE } from "../../../../shared/constants/local";
import { LuxuryColors } from "../../../../utils/styles";
import { finishCase } from "../../../../services/case/finish-case";
import { leaveCase } from "../../../../services/case/leave-case";
import MessagesList from "../../../chat/messages-list";
import { connectSocket } from "../../../../socket/socket";
import send from "../../../../shared/utils/dsend.svg"

const CurrentCases: FunctionComponent<Props> = ({ className, tourRef }) => {
  const [cases, setCases] = useState<Cases[]>([])
  const [otherPersonName, setOtherPersonName] = useState<string>('')
  const [selectedCase, setSelectedCase] = useState<Cases>(initialCases)
  const {calendar_information} = useAppSelector(state => state.calendarState)
  const {content} = useAppSelector(state => state.messageState)
  const { client, lawyer, messages, otherPersonId, chatId } = useAppSelector(state => state.globalState)
  const {guideCaseOpen} = useAppSelector(state => state.guideState)
  const [open, setOpen] = useState<boolean>(false)
  const [childrenDrawer, setChildrenDrawer] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  let ownId: string
  let userType: string

  if(typeof window !== 'undefined') {
    ownId = window.localStorage.getItem(USER_ID)!
  }
  if(typeof window !== 'undefined') {
    userType = window.localStorage.getItem(USER_TYPE)!
  }

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const toggleChildrenDrawer = () => {
    setChildrenDrawer(!childrenDrawer)
  }

  const onGetCitations = (casesList: Cases[]) => {
    let calendar_info = calendar_information

    for(let i = 0; i < casesList.length; ) {
      for(let j = 0; j < casesList[i].next_court.length; ) {

        if(calendar_info[casesList[i].next_court[j].date] === undefined) {
        
        const newDate = {[casesList[i].next_court[j].date]: {
          citations: [{citation: casesList[i].next_court[j].citation}],
          notes: []
        }}

        calendar_info = {...calendar_info, ...newDate}
        j++
        
        } else if(Boolean(calendar_info[casesList[i].next_court[j].date])) {
        
          if(calendar_info[casesList[i].next_court[j].date].citations.indexOf({citation: casesList[i].next_court[j].citation}) < 0) {
          
            const newNote = {[casesList[i].next_court[j].date]: {
              citations: [...calendar_info[casesList[i].next_court[j].date].citations, {citation: casesList[i].next_court[j].citation}],
              notes: [...calendar_info[casesList[i].next_court[j].date].notes]
            }}
            
            calendar_info = {...calendar_info, ...newNote}
            j++
            
          } else {
            j++
          }
        }
      }
      i++
    }
    dispatch(calendarState.actions.setCalendarInfo(calendar_info))
    return
  }

  useEffect(() => {
    const userToken = localStorage.getItem(USER_TOKEN)
    
    if (userType && userToken) {
      getCurrentCases(userType)
          .then(response => {
            if(!response.success) return

            const casesList = response.data;
            setCases(casesList)
            onGetCitations(casesList)

          }).catch(error => console.error(error))
    }

  }, [])

  useEffect(() => {
    const heightY = document.getElementById('inner-chat')?.offsetTop
    if (heightY) {
      document.getElementById('chat-body')!.scrollTo(0, heightY!)
    }
  }, [messages])

  const onChat = (otherPersonId: string) => {
    dispatch(globalState.actions.setMessageName(otherPersonName))
    dispatch(globalState.actions.setOtherPersonId(otherPersonId))
    getChat(otherPersonId, ownId, userType)
      .then(response => {
        if (!response.success) return
        if (!response.data.messages) return dispatch(globalState.actions.setMessages([]))  
        
        const chatId = response.data._id
        const messagesFromResponse = response.data.messages
      
        dispatch(globalState.actions.setChatId(chatId))
        dispatch(globalState.actions.setMessages(messagesFromResponse))  
      })
  }

  const onSendMessage = useCallback(() => {
    if(!content) return

    dispatch(globalState.actions.setMessages([...messages, {content: content, user_id: ownId}]))
    dispatch(messageState.actions.setMessage(''))
    dispatch(chatState.actions.setChatInput(''))
    
    if(!chatId) {
      connectSocket().emit('createChat', {
        user_id: ownId, 
        otherPersonId: otherPersonId, 
        user_type: userType, 
        message: content,
      })
      
    } else {
      connectSocket().emit('sendMessage', {
        message: content,
        user_type: userType,
        other_person_id: otherPersonId,
        user_id: ownId,
        chat_id: chatId,
      })
      
    }
    return
  }, [content])

  const onFinish = () => {
    finishCase(selectedCase._id, userType, ownId)
      .then(res => {
        if(!res.success) return

        toggleDrawer()
        setCases(cases.splice(cases.indexOf(selectedCase), 1))
      })
  }

  return (
    <div className={className}>
        {
          cases.length > 0
            ?
            <div className="current-cases-list" key={uuidv4()} ref={tourRef?.cardStep}>
              {cases.map(x => (
                <CasesCard key={uuidv4()} card_id={x._id} CurrentCases caseId={x._id} onClick={() => {setSelectedCase(x); toggleDrawer()}} firstFieldText='Case ID: ' firstField={x._id + ''} secondFieldText={client ? 'Lawyer: ' : (lawyer ? 'Client: ' : '')} secondField={client ? (x.lawyer_name! ? x.lawyer_name! : 'No lawyer yet') : (lawyer ? x.client_name! : '')} thirdFieldText='Next Court Date: ' thirdField={x.next_court[0] ? x.next_court[0].date : 'No date yet'}  fifthFieldText={(client ? 'Status: ' : (lawyer ? 'Case Type: ' : ''))} fifthField={client ? x.status : (lawyer ? x.data.case_type : '')} sixthFieldText='Needed Files: ' sixthField={x.needed_files.files_types!.length} seventhFieldText='Language: ' seventhField={x.data.languages} eighthFieldText='Judgement Location: ' eighthField={x.judgement_location.court_adress ? x.judgement_location.court_adress : x.data.city} ninethFieldText='Case Description: ' ninethField={x.data.description} />
              ))}
            </div>
            : 
            <div className="current-cases-container">
              <div className="current-cases-categories">There are no cases yet</div>
            </div>
        }
        <Drawer style={{background: LuxuryColors.darkButton, color: LuxuryColors.selected}} onClose={toggleDrawer} closeIcon={false} open={(open || guideCaseOpen)} >
          <CasesCard key={uuidv4()} card_id={selectedCase._id} tourRef={tourRef} showAllInfo={true} CurrentCases caseId={selectedCase._id} onChat={() => {toggleChildrenDrawer(); onChat(lawyer ? selectedCase.client_id! : selectedCase.lawyer_id!); setOtherPersonName(lawyer ? selectedCase.client_name! : selectedCase.lawyer_name!)}} onFinish={onFinish} firstFieldText='Case ID: ' firstField={selectedCase._id + ''} secondFieldText={client ? 'Lawyer: ' : (lawyer ? 'Client: ' : '')} secondField={client ? (selectedCase.lawyer_name! ? selectedCase.lawyer_name! : 'No lawyer yet') : (lawyer ? selectedCase.client_name! : '')} thirdFieldText='Next Court Date: ' thirdField={selectedCase.next_court[0] ? selectedCase.next_court[0].date : 'No date yet'}  fifthFieldText={(client ? 'Status: ' : (lawyer ? 'Case Type: ' : ''))} fifthField={client ? selectedCase.status : (lawyer ? selectedCase.data.case_type : '')} sixthFieldText='Needed Files: ' sixthField={selectedCase.needed_files.files_types!.length} seventhFieldText='Language: ' seventhField={selectedCase.data.languages} eighthFieldText='Judgement Location: ' eighthField={selectedCase.judgement_location.court_adress ? selectedCase.judgement_location.court_adress : selectedCase.data.city} ninethFieldText='Case Description: ' ninethField={selectedCase.data.description} />
          <Drawer style={{background: LuxuryColors.darkButton, color: LuxuryColors.selected}} onClose={toggleChildrenDrawer} closeIcon={false} open={childrenDrawer}>
            <div className={`${className} chat-drawer`}>
              <div className={`${className} messages-body`} id='chat-body'>
                {messages.map(message => (
                  <MessagesList className={message.user_id === ownId ? `${className} messages-body_own` : `${className} messages-body_its`} key={uuidv4()} message={message.content} myMessage={message.user_id == ownId} />
                ))}
                <div id='inner-chat'></div>
              </div>
              <div className={`${className} messages-input`}>
                <input className="messages-input_box" id="send-message" autoCapitalize='sentences' autoFocus placeholder="Write a message" name="message" autoComplete="off" type='text' onChange={e => dispatch(messageState.actions.setMessage(e.target.value))} value={content} />
                <div className="messages-input_btn" onClick={onSendMessage}><Image src={send} height={25} width={25} /></div>
              </div>
            </div>
          </Drawer>
        </Drawer>
    </div>
  )
}

export default CurrentCases

interface Props {
  className?: string;
  tourRef?: Record<string, MutableRefObject<any>>;
}

export interface Cases {
  _id: string;
  client_id?: string;
  client_name?: string;
  lawyer_id?: string;
  lawyer_name?: string;
  next_court: NextCourt[];
  needed_files: NeededFiles;
  data: Data;
  languages: string;
  judgement_location: Location;
  status: string;
}

export interface NextCourt {
  citation: string;
  date: string;
}

export interface Data {
  description: string;
  city: string;
  languages: string;
  case_type: string;
}

export interface Location {
  court_adress: string;
}

export interface NeededFiles {
  files_types?: string[]; 
  files_url?: Files_URL[];
}

export interface Files_URL {
  name?: string;
  url?: string;
}

export const initialCases = {
  _id: '',
  client_id: '',
  client_name: '',
  lawyer_id: '',
  lawyer_name: '',
  next_court: [{
    citation: '',
    date: '',
  }],
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
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import getChatsList from "../../services/chat/get-chats-list";
import createMessage from "../../services/messages/create-message";
import setReadedMessages from "../../services/messages/set-readed";
import { useAppDispatch, useAppSelector } from "../../state";
import globalState from "../../state/global";
import messageState from "../../state/message";
import chatState from "../../state/chat";
import ChatsList from "./chats-list";
import MessagesList from "./messages-list";
import back from '../../shared/utils/dchatback.svg'
import close from '../../shared/utils/dclose.svg'
import send from '../../shared/utils/dsend.svg'
import { connectSocket } from "../../socket/socket";
import { USER_ID, USER_TYPE } from "../../shared/constants/local";
import createChat from "../../services/chat/create-chat";
import { error } from "console";
import getChat from "../../services/chat/get-chat";

const Chat: FunctionComponent<Props> = ({ className }) => {
  const { chatSelected, chatsList, client, messages, message_name, otherPersonId, chatId } = useAppSelector(state => state.globalState)
  const { content } = useAppSelector(state => state.messageState)
  const { chatInput } = useAppSelector(state => state.chatState)
  const [spinning, setSpinning] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  let userType: string
  let userId: string 
 
  if(typeof window !== 'undefined') {
    userType = window.localStorage.getItem(USER_TYPE)!
  }
  if(typeof window !== 'undefined') {
    userId = window.localStorage.getItem(USER_ID)!
  }
  
  // useEffect(() => {
  //   const myId = localStorage.getItem(USER_ID)
  // }, [])

  const onSelectChat = (selectedChatId: string, otherOneId: string, otherOneName: string) => {
    dispatch(globalState.actions.setMessageName(otherOneName))
    dispatch(globalState.actions.setChatId(selectedChatId))
    dispatch(globalState.actions.setOtherPersonId(otherOneId))
    getChat(otherOneId, userId, userType)
      .then(response => {
        if (!response.success) return console.log('1')
        console.log(response.data)
        if (!response.data.messages) return console.log('2')
        if (response.data.messages.length === 0) return console.log('3')

        const messagesList = response.data.messages
        console.log('messagesList: ', messagesList)

        dispatch(globalState.actions.setMessages([...messages, ...messagesList]))
        dispatch(globalState.actions.setChatSelected(true))
      })
  }

  const onClose = () => {
    dispatch(globalState.actions.setChatIsOpen(false))
    dispatch(globalState.actions.setChatSelected(false))
    dispatch(messageState.actions.setMessage(''))
    dispatch(globalState.actions.setChatsList([]))
    dispatch(globalState.actions.setMessages([]))
    dispatch(globalState.actions.setMessageName(''))
    dispatch(globalState.actions.setOtherPersonId(''))
  }

  const onBack = () => {
    getChatsList()
      .then(response => {
        if (response.success) {
          const chats = response.data

          dispatch(globalState.actions.setChatSelected(false))
          dispatch(globalState.actions.setChatsList(chats))
          dispatch(globalState.actions.setMessages([]))
          dispatch(globalState.actions.setMessageName(''))
          dispatch(globalState.actions.setOtherPersonId(''))
          dispatch(globalState.actions.setChatIsOpen(true))
          dispatch(messageState.actions.setMessage(''))
        }
      }).catch(error => console.error(error))
  }
  
  const onSendMessage = useCallback(() => {
    setSpinning(true)
    if(!content) {
      setSpinning(false)
      return 
    }
    dispatch(globalState.actions.setMessages([...messages, {content: content, user_id: userId}]))
    dispatch(messageState.actions.setMessage(''))
    dispatch(chatState.actions.setChatInput(''))
    
    if(!chatId) {
      connectSocket().emit('createChat', {
        user_id: userId, 
        otherPersonId: otherPersonId, 
        user_type: userType, 
        message: content,
      })
      
    } else {
      connectSocket().emit('sendMessage', {
        message: content,
        user_type: userType,
        other_person_id: otherPersonId,
        user_id: userId,
        chat_id: chatId,
      })
      
    }
    return
  }, [content])

  connectSocket().on('sentMessage', (messageSent: Record<string, any>) => {
    console.log('message data: ', messageSent)
    dispatch(globalState.actions.setMessages([...messages, messageSent]))
  })

  connectSocket().on('chatCreated', (data: Record<string, any>) => {
      dispatch(globalState.actions.setChatsList([...chatsList, data]))
      dispatch(globalState.actions.setMessages([...data.messages]))
      dispatch(globalState.actions.setChatId(data.chatId))
  })

  connectSocket().on('createChatCompleted', (data: string) => {
    dispatch(globalState.actions.setChatId(data))
  })
  // useEffect(() => {
  //   const height = messagesContainerRef.current?.scrollHeight || 0
  //   messagesContainerRef.current?.scrollTo(0, height)
  // }, [messages])

  return (
    <div className={className}>
      {chatSelected
        ? <div className="messages-head">
          <div className="messages-head_back" onClick={() => onBack()}><Image src={back} height={25} width={25} /></div>
          <div className="messages-head_name">{message_name}</div>
          <div className="messages-head_close" onClick={onClose}><Image src={close} height={25} width={25} /></div>
        </div>
        : <div className="chats-head">
          <div></div>
          <div className="chats-head_title">Chats</div>
          <div className="chats-head_close" onClick={onClose}><Image src={close} height={25} width={25} /></div>
        </div>
      }
      {chatSelected
        ? <div className="messages-body">
          {messages.map(message =>
            <MessagesList className={message.user_id == userId ? 'messages-body_own' : 'messages-body_its'} key={uuidv4()} message={message.content} myMessage={message.user_id == userId} />
          )}
        </div>
        : <div className="chats-body">
          {chatsList.map(chat =>
            <ChatsList key={chat._id} name={client ? chat.lawyer_name : chat.client_name} onSelectChat={() => onSelectChat(chat._id, client ? chat.lawyer_id : chat.client_id, client ? chat.lawyer_name : chat.client_name)} last_message={chat.last_message} messages_counter={chat.messages_counter} />
          )}
        </div>
      }
      {chatSelected
        ? 
        // <Spin spinning={spinning} indicator={<LoadingOutlined style={{color: '#fff'}}/>}>
          <div className="messages-input">
            <input className="messages-input_box" id="send-message" autoCapitalize='sentences' autoFocus placeholder="Write a message" name="message" autoComplete="off" type='text' onChange={e => dispatch(messageState.actions.setMessage(e.target.value))} value={content} />
            <div className="messages-input_btn" onClick={onSendMessage}><Image src={send} height={25} width={25} /></div>
          </div>
        // </Spin>
        : 
        <div className="chats-input">
          <input className="chats-input_box" autoCapitalize='sentences' placeholder="Look for a chat" type='text' onChange={e => dispatch(chatState.actions.setChatInput(e.target.value))} value={chatInput} />
          <button className="chats-input_btn" >Send</button>
        </div>
      }
    </div>
  )
}

interface Props {
  className?: string;
  isOpen?: boolean;
}

interface Message {
  _id?: string;
  user_id: string;
  content: string;
}

export default Chat
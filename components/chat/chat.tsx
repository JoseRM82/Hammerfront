import { FunctionComponent, useCallback, useEffect, useState } from "react";
import getChatsList from "../../services/chat/get-chats-list";
import createMessage from "../../services/messages/create-message";
import getMessages from "../../services/messages/get-messages";
import setReadedMessages from "../../services/messages/set-readed";

import { useAppDispatch, useAppSelector } from "../../state";
import globalState from "../../state/global";
import messageState from "../../state/message";
import chatState from "../../state/chat";
import ChatsList from "./chats-list";
import MessagesList from "./messages-list";
import { USER_ID } from "../../shared/constants/local";

const Chat: FunctionComponent<Props> = ({ className }) => {
  const { currentChatId, messages, message_name, chatsList, client } = useAppSelector(state => state.globalState)
  const { message } = useAppSelector(state => state.messageState)
  const { chatInput } = useAppSelector(state => state.chatState)
  const [ownId, setOwnId] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    const myId = localStorage.getItem(USER_ID)
    myId ? setOwnId(myId) : dispatch(globalState.actions.setCurrentChatId(''))
  }, [])

  const onSelectChat = (id: string, name: string) => {
    getMessages(id)
      .then(response => {
        if (response.success) {
          const messages = response.data

          dispatch(globalState.actions.setMessages(messages))
        }
      })
      .then(() => {
        setReadedMessages(id)
      })

    dispatch(globalState.actions.setCurrentChatId(id))
    dispatch(globalState.actions.setMessageName(name))
  }

  const onClose = () => {
    dispatch(globalState.actions.setChatIsOpen(false))
    dispatch(globalState.actions.setCurrentChatId(''))
    dispatch(messageState.actions.setMessage(''))
    dispatch(globalState.actions.setChatsList([]))
    dispatch(globalState.actions.setMessages([]))
    dispatch(globalState.actions.setMessageName(''))
  }

  const onBack = () => {
    getChatsList()
      .then(response => {
        if (response.success) {
          const chats = response.data

          dispatch(globalState.actions.setCurrentChatId(''))
          dispatch(globalState.actions.setChatsList(chats))
          dispatch(globalState.actions.setMessages([]))
          dispatch(globalState.actions.setMessageName(''))
          dispatch(globalState.actions.setChatIsOpen(true))
          dispatch(messageState.actions.setMessage(''))
        }
      }).catch(error => console.error(error))
  }

  const onSendMessage = useCallback(() => {
    if (message) {
      createMessage(message, currentChatId)
        .then(() => dispatch(messageState.actions.setMessage('')))
    }
  }, [message])

  // useEffect(() => {
  //   const height = messagesContainerRef.current?.scrollHeight || 0
  //   messagesContainerRef.current?.scrollTo(0, height)
  // }, [messages])

  return (
    <div className={className}>
      {currentChatId
        ? <div className="messages-head">
          <div className="messages-head_back" onClick={() => onBack()}>O</div>
          <div className="messages-head_name">{message_name}</div>
          <div className="messages-head_close" onClick={onClose}>X</div>
        </div>
        : <div className="chats-head">
          <div></div>
          <div className="chats-head_title">Chats</div>
          <div className="chats-head_close" onClick={onClose}>X</div>
        </div>
      }
      {currentChatId
        ? <div className="messages-body">
          {messages.map(x =>
            <MessagesList className={x.user_id == ownId ? 'messages-body_own' : 'messages-body_its'} key={x._id} message={x.message_content} myMessage={x.user_id == ownId} />
          )}
        </div>
        : <div className="chats-body">
          {chatsList.map(x =>
            <ChatsList key={x._id} name={client ? x.lawyer_name : x.client_name} onSelectChat={() => onSelectChat(x._id, client ? x.lawyer_name : x.client_name)} last_message={x.last_message} messages_counter={x.messages_counter} />
          )}
        </div>
      }
      {currentChatId
        ? <div className="messages-input">
          <input className="messages-input_box" id="send-message" autoCapitalize='sentences' autoFocus placeholder="Write a message" name="message" autoComplete="off" type='text' onChange={e => dispatch(messageState.actions.setMessage(e.target.value))} value={message} />
          <button className="messages-input_btn" form="send-message" onClick={onSendMessage}>Send</button>
        </div>
        : <div className="chats-input">
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

export default Chat
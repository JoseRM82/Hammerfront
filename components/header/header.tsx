import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Popover } from 'antd';

import { USER_ID, USER_NAME, USER_TOKEN, USER_TYPE } from '../../shared/constants/local';
import globalState from '../../state/global'
import userState from '../../state/user'
import { useAppDispatch, useAppSelector } from '../../state';
import getChatsList from '../../services/chat/get-chats-list';

const Header: FunctionComponent<Props> = ({ className }) => {
  const { client, lawyer } = useAppSelector(state => state.globalState)
  const { chatIsOpen } = useAppSelector(state => state.globalState)
  const [loged, setLoged] = useState(false)
  const [userInfo, setUserInfo] = useState('')
  const dispatch = useAppDispatch()
  const router = useRouter()
  
  useEffect(() => {
    loged ? setLoged(false) : setLoged(true)
      
  }, [client, lawyer])
  
  useEffect(() => {
    const userData = localStorage.getItem(USER_NAME)
    userData ? setUserInfo(userData) : setUserInfo('')
  }, [])

  const onLogout = () => {
    localStorage.removeItem(USER_TYPE)
    localStorage.removeItem(USER_TOKEN)
    localStorage.removeItem(USER_NAME)
    localStorage.removeItem(USER_ID)
    dispatch(globalState.actions.setClientActive(false))
    dispatch(globalState.actions.setLawyerActive(false))
    dispatch(globalState.actions.setChatIsOpen(false)) 
    dispatch(globalState.actions.setCurrentRequest(''))
    dispatch(globalState.actions.setLawyersList([]))
    dispatch(globalState.actions.setCurrentChatId(''))
    dispatch(globalState.actions.setOwnId(''))
    dispatch(globalState.actions.setMessages([]))
    dispatch(globalState.actions.setMessageName(''))
    dispatch(globalState.actions.setChatsList([]))
    router.push('/')
  }

  const onChatOpen = () => {
    if (chatIsOpen) {
      dispatch(globalState.actions.setChatIsOpen(false))
    } else {
      getChatsList()
        .then(response => {
          if (response.success) {
            const chatsList = response.data

            dispatch(globalState.actions.setChatsList(chatsList))
          }
        }).catch(error => console.log(error))
      dispatch(globalState.actions.setChatIsOpen(true))
    }
  }

  const onGoToPage = (path: string) => {
    router.push(path)
  }

  return (
    <div className={className}>
      <div className='signs'>
        {(!client && !lawyer) && <div className='sign' onClick={() => onGoToPage('/sign-in')}>Sign in </div>}
        {(!client && !lawyer) && <div>/</div>}
        {(!client && !lawyer) && <div className='sign' onClick={() => onGoToPage('/sign-up')}> Sign up</div>}
        <Popover>
         {loged && <div className='sign' onClick={onLogout} >{userInfo}</div>}
        </Popover>
      </div>
      <div className='main-header'>
        <div className='logo' onClick={() => onGoToPage('/')} >Logo</div>
        <div className='options'>
          <div className='options-list'>
            {(client || lawyer) && <button className='options-list_item' onClick={onChatOpen} >Chat</button>}
            {(client || lawyer) && <Link href='/cases'><button className='options-list_item'>Your Cases</button></Link>}
            {client && <button className='options-list_item' onClick={() => onGoToPage('/new-case')}>New Case</button>}
            <button className='options-list_item' onClick={() => onGoToPage('/our-professionals')}>Our Professionals</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;

interface Props {
  className?: string;
  header?: boolean;
}

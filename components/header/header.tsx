import Link from 'next/link';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

import { USER_TOKEN, USER_TYPE } from '../../shared/constants/local';
import globalState from '../../state/global'
import { useAppDispatch, useAppSelector } from '../../state';
import getChatsList from '../../services/chat/get-chats-list';

const Header: FunctionComponent<Props> = ({ className }) => {
  const { client, lawyer } = useAppSelector(state => state.globalState)
  const { chatIsOpen } = useAppSelector(state => state.globalState)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onLogout = () => {
    localStorage.removeItem(USER_TYPE)
    localStorage.removeItem(USER_TOKEN)
    dispatch(globalState.actions.setClientActive(false))
    dispatch(globalState.actions.setLawyerActive(false))
    dispatch(globalState.actions.setChatIsOpen(false))
    dispatch(globalState.actions.setCurrentCases([]))
    dispatch(globalState.actions.setCurrentRequest(''))
    dispatch(globalState.actions.setLawyersList([]))
    dispatch(globalState.actions.setPastCases([]))
    dispatch(globalState.actions.setRequests([]))
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
        })
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
        {(!client && !lawyer) && <div className='sign' onClick={() => onGoToPage('/sign-up')}> Sign up</div>}
        {(client || lawyer) && <div className='sign' onClick={onLogout} > Log out</div>}
      </div>
      <div className='main-header'>
        <div className='logo' onClick={() => onGoToPage('/')} >Logo</div>
        <div className='options'>
          <div className='options-list'>
            {(client || lawyer) && <button className='options-list_item' onClick={onChatOpen} >Chat</button>}
            {(client || lawyer) && <Link href='/cases'><button className='options-list_item'>Your Cases</button></Link>}
            {client && <button className='options-list_item' onClick={() => onGoToPage('/contact-us')}>New Case</button>}
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

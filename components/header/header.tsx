import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Popover } from 'antd';
import Image from 'next/image';

import { USER_ID, USER_NAME, USER_TOKEN, USER_TYPE } from '../../shared/constants/local';
import globalState from '../../state/global'
import { useAppDispatch, useAppSelector } from '../../state';
import getChatsList from '../../services/chat/get-chats-list';
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import larrow from './larrow.svg'
import darrow from './darrow.svg'
import dinfo from '../../shared/utils/dinfo.svg'
import linfo from '../../shared/utils/linfo.svg'
import dout from '../../shared/utils/dout.svg'
import lout from '../../shared/utils/lout.svg'


const Header: FunctionComponent<Props> = ({ className, visitor, mainPage }) => {
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
        }).catch(error => console.error(error))
      dispatch(globalState.actions.setChatIsOpen(true))
    }
  }

  const onGoToPage = (path: string, sign: string) => {
    dispatch(globalState.actions.setSign(sign))
    router.push(path)
  }

  const content = (
    <div className={className + ' header-popover'}>
      <div className='header-popover-field'>
        <div className='header-popover-image'><Image src={dinfo} height={25} width={25} /></div>  
      Change your info</div>
      <div className='header-popover-field' onClick={onLogout}>
        <div className='header-popover-image'><Image src={dout} height={25} width={25} /></div>  
      Log Out</div>
    </div>
  )

  return (
    <div className={className}>
      <div className='main-header'>
        {mainPage
          ?
          <div className='logo'><div><Image src={logo2} height={100} width={100} /></div></div>
          :
          <div className='page-name' onClick={() => onGoToPage('/', '')}>HAMMER</div>
        }
          <div className='options'>
            <div className='options-list'>
              {(client || lawyer) && <button className='options-list_item' onClick={onChatOpen} >Chat</button>}
              {(client || lawyer) && <Link href='/cases'><button className='options-list_item'>Your Cases</button></Link>}
              {client && <button className='options-list_item' onClick={() => onGoToPage('/new-cases', '')}>Create a Case</button>}
              {(client || lawyer) && 
              <Popover trigger='click' color='#111114' arrow={false} content={content}>
                <div className='signed-user'>
                  {userInfo}
                  <div className='signed-user-image'>
                    <Image src={darrow} height={25} width={25} />
                  </div>
                </div>
              </Popover>}
              {visitor && <div className='signs'>
                {(!client && !lawyer) && <div className='sign' onClick={() => onGoToPage('/sign-in-up', 'SignIn')}>Sign in </div>}
                {(!client && !lawyer) && <div>/</div>}
                {(!client && !lawyer) && <div className='sign' onClick={() => onGoToPage('/sign-in-up', 'SignUp')}> Sign up</div>}
              </div>}
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
  visitor?: boolean;
  mainPage?: boolean;
}

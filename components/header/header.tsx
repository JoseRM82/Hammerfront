import Link from 'next/link';
import { FunctionComponent, useEffect, useState, useRef, MutableRefObject } from 'react';
import { useRouter } from 'next/router';
import { Popover } from 'antd';
import Image from 'next/image';

import { USER_ID, USER_NAME, USER_TOKEN, USER_TYPE } from '../../shared/constants/local';
import globalState from '../../state/global'
import { useAppDispatch, useAppSelector } from '../../state';
import getChatsList from '../../services/chat/get-chats-list';
import logo from './logo.png'
import darrow from './darrow.svg'
import dinfo from '../../shared/utils/dinfo.svg'
import dout from '../../shared/utils/dout.svg'
import { connectSocket } from '../../socket/socket';
import guideState from '../../state/guide';
// import { tourRefsList } from '../../shared/utils/tour-refs';


const Header: FunctionComponent<Props> = ({ className, visitor, mainPage, tourRef }) => {
  const { client, lawyer, chatIsOpen, messages, currentTourStep } = useAppSelector(state => state.globalState)
  const { guideAvailable } = useAppSelector(state => state.guideState)
  const [loged, setLoged] = useState(false)
  const [userInfo, setUserInfo] = useState('')
  const dispatch = useAppDispatch()
  const router = useRouter()
  let user_id: string

  if(typeof window !== 'undefined'){
    user_id = window.localStorage.getItem(USER_ID)!
  }

  connectSocket().on('sentMessage', (messageData: Record<string, any>) => {
    dispatch(globalState.actions.setMessages([...messages, {_id: messageData._id, user_id: messageData.user_id, content: messageData.content}]))
  })
  
  useEffect(() => {
    loged ? setLoged(false) : setLoged(true)
      
  }, [client, lawyer])
  
  useEffect(() => {
    const userData = localStorage.getItem(USER_NAME)
    userData ? setUserInfo(userData) : setUserInfo('')
  }, [])

  useEffect(() => {
    connectSocket().emit('sentId', user_id)
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
    dispatch(globalState.actions.setChatSelected(false))
    dispatch(globalState.actions.setOwnId(''))
    dispatch(globalState.actions.setMessages([]))
    dispatch(globalState.actions.setMessageName(''))
    dispatch(globalState.actions.setChatsList([]))
    dispatch(guideState.actions.setGuideAvailable(false))
    router.push('/')
  }

  const onChatOpen = () => {
    if (chatIsOpen) {
      dispatch(globalState.actions.setChatIsOpen(false))
    } else {
      getChatsList()
        .then(response => {
          if(!response.success) return

          const chatsList = response.data

          dispatch(globalState.actions.setChatsList(chatsList))

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
      <div className='header-popover-field' onClick={onLogout}>
        <div className='header-popover-image'><Image src={dout} height={25} width={25} /></div>  
      Log Out</div>
    </div>
  )

  const content2 = (
    <div className={className + ' header-mobile-popover'}>
      <div className='header-popover-mobile-field' onClick={onLogout}>
        <div className='header-popover-mobile-image'><Image src={dout} height={25} width={25} /></div>  
      Log Out</div>
    </div>
  )

  return (
    <div className={className}>
      <div className='main-header'>
        {mainPage
          ?
          <div className='logo-desk'><div className='logo-desk-container'><Image src={logo} height={100} width={100} /></div></div>
          :
          <div className='page-desk-name' onClick={() => onGoToPage('/', '')}>HAMMER</div>
        }
          <div className='top-mobile-header'>
            {mainPage
              ?
              <div className='logo-mobile'><div className='logo-mobile-container'><Image src={logo} height={100} width={100} /></div></div>
              :
              <div className='page-mobile-name' onClick={guideAvailable ? () => onGoToPage('/', '') : onLogout}>HAMMER</div>}
            {(client || lawyer) && 
              <Popover className='mobile-popover' trigger='click' color='#111114' arrow={false} content={content2}>
                <div className='signed-mobile-user'>
                  {userInfo}
                  <div className='signed-mobile-user-image'>
                    <Image src={darrow} height={25} width={25} />
                  </div>
                </div>
              </Popover>
            }
          </div>
          <div className='options'>
            <div className='options-list'>
              {(guideAvailable) && <button className='options-list_item' onClick={() => dispatch(globalState.actions.setCurrentTourStep(1))} >Guide</button>}
              {(client || lawyer) && <button className='options-list_item' onClick={onChatOpen} ref={tourRef?.chatStep} >Chat</button>}
              {(client || lawyer) && <Link href='/cases'><button className='options-list_item' ref={tourRef?.casesStep}>Your Cases</button></Link>}
              {client && <button className='options-list_item' onClick={() => onGoToPage('/new-cases', '')} ref={tourRef?.newCaseStep}>Create a Case</button>}
              {(client || lawyer) && 
              <Popover className='desk-popover' trigger='click' color='#111114' arrow={false} content={content}>
                <div className='signed-desk-user' ref={tourRef?.accountStep}>
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
  tourRef?: Record<string, MutableRefObject<any>>;
}

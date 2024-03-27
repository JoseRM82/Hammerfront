import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import 'dotenv/config'

import Chat from '../components/chat'
import Footer from '../components/footer'
import Header from '../components/header'
import MainBody from '../components/main-body'
import getOwnId from '../services/auth/get-own-id'
import { USER_ID, USER_TOKEN, USER_TYPE } from '../shared/constants/local'
import { useAppDispatch, useAppSelector } from '../state'
import globalState from './../state/global'
import { connectSocket } from '../socket/socket'

const Hammer: NextPage<Props> = ({ className }) => {
  const { chatIsOpen } = useAppSelector(state => state.globalState)
  const [noLogged, setNoLogged] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    const userType = window?.localStorage.getItem(USER_TYPE)
    const token = window?.localStorage.getItem(USER_TOKEN)

    dispatch(globalState.actions.setCurrentRequest(''))

    if (userType === 'client' && token) {
      console.log('token: ', token)
      console.log('type: ', userType)
      dispatch(globalState.actions.setClientActive(true))
      dispatch(globalState.actions.setLawyerActive(false))

      getOwnId().then(response => {
        console.log('1')
        if(!response.success) return console.log('ownid failed')
        console.log('ownidData: ', response.data)
 
        dispatch(globalState.actions.setOwnId(response.data))
      }).catch(error => {console.error(error); dispatch(globalState.actions.setClientActive(false)); setNoLogged(false)})

    } else if (userType === 'lawyer' && token) {
      dispatch(globalState.actions.setClientActive(false))
      dispatch(globalState.actions.setLawyerActive(true))
      
      getOwnId().then(response => {
        console.log('1')
        if(!response.success) return console.log('ownid failed')
        console.log('ownidData: ', response.data)
        
        dispatch(globalState.actions.setOwnId(response.data))
      }).catch(error => {console.error(error); dispatch(globalState.actions.setLawyerActive(false)); setNoLogged(false)})

    } else {
      dispatch(globalState.actions.setClientActive(false))
      dispatch(globalState.actions.setLawyerActive(false))
    }
  }, [])

  return (
    <>
      <div className={className}>
        <Head>
          <title>Hammer & Co.</title>
          <meta name="Hammer services page" />
        </Head>

        <Header className='header' mainPage visitor={noLogged} />
        <div className='body'>
          <MainBody />
        </div>
        <Footer />
      </div>
      <Chat isOpen={chatIsOpen} />
    </>
  )
}

export default Hammer

interface Props {
  className: string;
}

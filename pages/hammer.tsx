import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import Chat from '../components/chat'
import Footer from '../components/footer'
import Header from '../components/header'
import MainBody from '../components/main-body'
import getOwnId from '../services/auth/get-own-id'
import { USER_TOKEN, USER_TYPE } from '../shared/constants/local'
import { useAppDispatch, useAppSelector } from '../state'
import globalState from './../state/global'

const Hammer: NextPage<Props> = ({ className }) => {
  const { chatIsOpen } = useAppSelector(state => state.globalState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const userType = localStorage.getItem(USER_TYPE)
    const token = localStorage.getItem(USER_TOKEN)

    dispatch(globalState.actions.setCurrentRequest(''))

    if (userType === 'client' && token) {
      dispatch(globalState.actions.setClientActive(true))
      dispatch(globalState.actions.setLawyerActive(false))

      getOwnId().then(response => {
        if (response.success) {
          dispatch(globalState.actions.setOwnId(response.data))
        }
      }).catch(error => console.error(error))

    } else if (userType === 'lawyer' && token) {
      dispatch(globalState.actions.setClientActive(false))
      dispatch(globalState.actions.setLawyerActive(true))

      getOwnId().then(response => {
        if (response.success) {
          dispatch(globalState.actions.setOwnId(response.data))
        }
      })

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

        <Header className='header' />
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
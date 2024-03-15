import Head from 'next/head'
import { FunctionComponent, useEffect } from 'react'

import Contact from '../../components/contact'
import Footer from '../../components/footer'
import Header from '../../components/header'
import globalState from '../../state/global'
import { useAppDispatch, useAppSelector } from '../../state'
import Chat from '../../components/chat'

const ContactUs: FunctionComponent<Props> = ({ className }) => {
  const { chatIsOpen } = useAppSelector(state => state.globalState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(globalState.actions.setCurrentRequest(''))
  }, [])

  return (
    <>
      <div className={className}>
        <Head>
          <title>Hammer & Co. Contact us</title>
          <meta name="Hammer services page" />
        </Head>

        <Header header />
        <div className='body'>
          <Contact />
        </div>
        <Footer />
      </div>
      <Chat isOpen={chatIsOpen} />
    </>
  )
}

export default ContactUs

interface Props {
  className?: string;
}

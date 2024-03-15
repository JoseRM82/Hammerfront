import Head from "next/head";
import { FunctionComponent, useEffect } from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";
import YourCases from "../../components/your-cases";
import globalState from '../../state/global'
import { USER_NAME, USER_TOKEN, USER_TYPE } from "../../shared/constants/local";
import { useAppDispatch, useAppSelector } from "../../state";
import { UserType } from "../../state/user/types";
import Chat from "../../components/chat";

const Cases: FunctionComponent<Props> = ({ className }) => {
  const { chatIsOpen } = useAppSelector(state => state.globalState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const userType = localStorage.getItem(USER_TYPE)
    const token = localStorage.getItem(USER_TOKEN)

    if (userType && token) {
      if (userType === UserType.Client) {
        dispatch(globalState.actions.setClientActive(true))
        dispatch(globalState.actions.setLawyerActive(false))

      } else if (userType === UserType.Lawyer) {
        dispatch(globalState.actions.setClientActive(false))
        dispatch(globalState.actions.setLawyerActive(true))

      } else {
        localStorage.removeItem(USER_TYPE)
        localStorage.removeItem(USER_TOKEN)
        localStorage.removeItem(USER_NAME)
        return
      }

    } else {
      localStorage.removeItem(USER_TYPE)
      localStorage.removeItem(USER_TOKEN)
      localStorage.removeItem(USER_NAME)
      return
    }

  }, [])

  return (
    <>
      <div className={className}>
        <Head>
          <title>Hammer & Co. newCase us</title>
          <meta name="Hammer services page" />
        </Head>

        <Header header />
        <div className='body'>
          <YourCases />
        </div>
        <Footer />
      </div>
      <Chat isOpen={chatIsOpen} />
    </>
  )
}

export default Cases

interface Props {
  className?: string;
}
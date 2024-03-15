import Head from "next/head";
import { FunctionComponent, useEffect } from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";
import YourCases from "../../components/your-cases";
import getCurrentCases from "../../services/case/get-current-cases";
import globalState from '../../state/global'
import { USER_TOKEN, USER_TYPE } from "../../shared/constants/local";
import { useAppDispatch, useAppSelector } from "../../state";
import getPastCases from "../../services/case/get-past-cases";
import getRequests from "../../services/case/get-requests";
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
        return
      }

      getCurrentCases(userType)
        .then(response => {
          if (response.success) {
            const cases = response.data;

            dispatch(globalState.actions.setCurrentCases(cases!))
          }
        }).catch(error => console.error(error))

      getPastCases(userType)
        .then(response => {
          if (response.success) {
            const pastCases = response.data

            dispatch(globalState.actions.setPastCases(pastCases))
          }
        }).catch(error => console.error(error))

      getRequests(userType)
        .then(response => {
          if (response.success) {
            const requests = response.data

            dispatch(globalState.actions.setRequests(requests))
          }
        }).catch(error => console.error(error))

      dispatch(globalState.actions.setCurrentRequest(''))
    }

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
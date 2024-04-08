import Head from "next/head";
import { FunctionComponent, useEffect, useRef } from "react";
import { Tour } from "antd";
import type { TourProps } from "antd";

import Footer from "../../components/footer";
import Header from "../../components/header";
import YourCases from "../../components/your-cases";
import globalState from '../../state/global'
import { USER_NAME, USER_TOKEN, USER_TYPE } from "../../shared/constants/local";
import { useAppDispatch, useAppSelector } from "../../state";
import { UserType } from "../../state/user/types";
import Chat from "../../components/chat";
import guideState from "../../state/guide";

const Cases: FunctionComponent<Props> = ({ className }) => {
  const { chatIsOpen, currentTourStep } = useAppSelector(state => state.globalState)
  const dispatch = useAppDispatch()

  const selectedStep = {
    chatStep: useRef(null),
    casesStep: useRef(null),
    newCaseStep: useRef(null),
    accountStep: useRef(null),
    tabsStep: useRef(null),
    cardStep: useRef(null),
    currentChatStep: useRef(null),
    filesStep: useRef(null),
    calendarStep: useRef(null),
    requestsStep: useRef(null),
    pastStep: useRef(null),
  }

  const steps: TourProps['steps'] = [
    {
      title: 'Start Guide',
      description: "Let's learn how to use the page",
      target: null,
      nextButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(2))}
      },
    },
    {
      title: 'Chat',
      description: "Here you can see your chats list. You'll receive a notification if someone sends you a message",
      target: () => selectedStep.chatStep.current,
      prevButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(1))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(3))},
      },
    },
    {
      title: 'Cases',
      description: "Now you're in this page, here you can manage your cases and all related to them.",
      target: () => selectedStep.casesStep.current,
      prevButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(2))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(4))},
      },
    },
    {
      title: 'New Case',
      description: "Here you can create a new case by filling its details. Only available as client.",
      target: () => selectedStep.newCaseStep.current,
      prevButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(3))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(5))},
      },
    },
    {
      title: 'Your account',
      description: 'Here you can log out.',
      target: () => selectedStep.accountStep.current,
      prevButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(4))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(6))},
      },
    },
    {
      title: 'Cases Tab',
      description: 'This is the options list to choose between your requests, ongoing cases, past cases or calendar.',
      target: () => selectedStep.tabsStep.current,
      prevButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(5))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(7))},
      },
    },
    {
      title: 'Current Cases',
      description: 'This are your ongoing cases, pressing a case card will display all its information.',
      target: () => selectedStep.cardStep.current,
      prevButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(6))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(guideState.actions.setGuideCaseOpen(true)); dispatch(globalState.actions.setCurrentTourStep(8))},
      },
    },
    {
      title: 'Cases Buttons',
      description: 'These buttons allows you to chat whith your Lawyer/Client or to finish the current case.',
      target: () => selectedStep.currentChatStep.current,
      prevButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(7)); dispatch(guideState.actions.setGuideCaseOpen(false))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(9))},
      },
    },
    {
      title: 'Case Files',
      description: 'Pressing this option allows you to request / send / download files or images as needed in your case.',
      target: () => selectedStep.filesStep.current,
      prevButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(8))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(guideState.actions.setGuideCaseOpen(false)); dispatch(guideState.actions.setGuideCalendarOpen(true)); dispatch(guideState.actions.setGuideCurrentOpen(false)); dispatch(globalState.actions.setCurrentTourStep(10))},
      },
    },
    {
      title: 'Calendar',
      description: 'If you have setted a court date for any of your cases it will be shown here in red if the date is near or yellow if not.',
      target: () => selectedStep.calendarStep.current,
      placement: 'topRight',
      prevButtonProps: {
        onClick: () => {dispatch(guideState.actions.setGuideCurrentOpen(true)); dispatch(guideState.actions.setGuideCalendarOpen(false)); dispatch(guideState.actions.setGuideCaseOpen(true)); dispatch(globalState.actions.setCurrentTourStep(9))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(11))},
      },
    },
    {
      title: 'Calendar',
      description: 'You can also set personal notes that will be shown in green if there are no citations on the same day.',
      target: () => selectedStep.calendarStep.current,
      placement: 'topLeft',
      prevButtonProps: {
        onClick: () => {dispatch(globalState.actions.setCurrentTourStep(10))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(guideState.actions.setGuideRequestsOpen(true)); dispatch(guideState.actions.setGuideCalendarOpen(false)); dispatch(globalState.actions.setCurrentTourStep(12))},
      },
    },
    {
      title: 'Requests',
      description: 'Your requests will be shown here. As a Lawyer you will be able to accept or reject a case displaying the information by clicking on a card.',
      target: () => selectedStep.requestsStep.current,
      prevButtonProps: {
        onClick: () => {dispatch(guideState.actions.setGuideCalendarOpen(true)); dispatch(guideState.actions.setGuideRequestsOpen(false)); dispatch(globalState.actions.setCurrentTourStep(11))}
      },
      nextButtonProps: {
        onClick: () => {dispatch(guideState.actions.setGuidePastOpen(true)); dispatch(guideState.actions.setGuideRequestsOpen(false)); dispatch(globalState.actions.setCurrentTourStep(13))},
      },
    },
    {
      title: 'Past Cases',
      description: 'You can see your closed cases and its information here',
      target: () => selectedStep.pastStep.current,
      prevButtonProps: {
        onClick: () => {dispatch(guideState.actions.setGuideRequestsOpen(true)); dispatch(guideState.actions.setGuidePastOpen(false)); dispatch(globalState.actions.setCurrentTourStep(12))}
      },
    },
  ]

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
          <title>Hammer & Co. NewCase us</title>
          <meta name="Hammer services page" />
        </Head>

        <Header tourRef={selectedStep} header />
        <div className='body'>
          <YourCases tourRef={selectedStep} />
        </div>
        <Footer />
      </div>
      <Tour open={currentTourStep > 0} steps={steps} onClose={() => dispatch(globalState.actions.setCurrentTourStep(0))} />
      <Chat isOpen={chatIsOpen} />
    </>
  )
}

export default Cases

interface Props {
  className?: string;
}
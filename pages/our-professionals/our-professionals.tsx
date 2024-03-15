import Head from 'next/head'
import { FunctionComponent, useEffect } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import ProfesionalsList from '../../components/professionals/list'
import globalState from '../../state/global'
import { useAppDispatch, useAppSelector } from '../../state'
import { USER_TOKEN, USER_TYPE } from '../../shared/constants/local'
import getLawyers from '../../services/lawyer/get-all'
import Chat from '../../components/chat'

const OurProfessionals: FunctionComponent<Props> = ({ className }) => {
  const { chatIsOpen } = useAppSelector(state => state.globalState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem(USER_TOKEN)
    const userType = localStorage.getItem(USER_TYPE)

    if (token && userType) {
      getLawyers()
        .then(response => {
          if (response.success) {
            const lawyersList = response.data

            dispatch(globalState.actions.setLawyersList(lawyersList))
          }
        })
    }
  }, [])

  return (
    <>
      <div className={className}>
        <Head>
          <title>Hammer & Co. Professionals</title>
          <meta name="Hammer services page" />
        </Head>

        <Header header />
        <ProfesionalsList />
        <Footer />
      </div>
      <Chat isOpen={chatIsOpen} />
    </>
  )
}

export default OurProfessionals

interface Props {
  className: string;
}

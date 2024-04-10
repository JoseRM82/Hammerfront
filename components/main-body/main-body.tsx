import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

import StyledButton from "../styled-button";
import Statistics from "./statistics/list";
import WhyUsList from "./why-us/list";
import WorkWithUs from "./work-with-us";
import { useAppDispatch, useAppSelector } from "../../state";
import guideState from "../../state/guide";
import globalState from "../../state/global";
import setUserToken from "../../state/user/actions/set-user-token";
// import { USER_ID, USER_NAME, USER_TOKEN, USER_TYPE } from "../../shared/constants/local";
import login from "../../services/auth/login";
import { UserType } from "../../state/user/types";
import setId from "../../state/user/actions/set-id";
import setName from "../../state/user/actions/set-name";
import setToken from "../../state/user/actions/set-token";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { GUIDE, USER_ID } from "../../shared/constants/local";

const MainBody: FunctionComponent<Props> = ({ className }) => {
  const {client, lawyer} = useAppSelector(state => state.globalState)
  const [spinning, setSpinning] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const route = useRouter()

  const onSignUp = () => {
    route.push('/sign-up')
  }

  const onTestMode = () => {
    setSpinning(true)
    login(process.env.NEXT_PUBLIC_TEST_EMAIL!, process.env.NEXT_PUBLIC_TEST_PASS!, process.env.NEXT_PUBLIC_TEST_TYPE!)
      .then(res => {
        if(!res.success) return setSpinning(false)
        dispatch(guideState.actions.setGuideAvailable(true))
        dispatch(globalState.actions.setClientActive(false))
        dispatch(globalState.actions.setLawyerActive(true))
        localStorage.setItem(GUIDE, 'enabled')
        dispatch(setUserToken(UserType.Lawyer))
        dispatch(setId(res.data!._id))
        dispatch(setName({name: 'Lawyer', last_name: 'Tester'}))
        dispatch(setToken(res.data!.token))
        route.push('/cases')
      }).catch(error => {console.error(error); setSpinning(false)}) 
  }

  return (
    <div className={className}>
      <div className="body-image-container">
        <div className="body-cristal">
          <div className="text">
            <h1>THE BIGGEST LAW SITE TO CONNECT PERSONS WITH THE CORRECT LAWYER</h1>
            <span>Here are the best lawyers in each specialty in all languages around the world</span>
            <div className="body-create_account">
              <Spin spinning={spinning} indicator={<LoadingOutlined style={{color: '#fff'}}/>}>
                {(!client && !lawyer) && <StyledButton white text="Try test mode" onClick={onTestMode} />}
              </Spin>
              {(!client && !lawyer) && <StyledButton text="Create your Account" onClick={onSignUp} />}
            </div>
          </div>
        </div>
      </div>
      <div className="main-body">
        <WhyUsList />
        <Statistics />
        <WorkWithUs />
      </div>
    </div>
  )
}

export default MainBody

interface Props {
  className?: string;
}
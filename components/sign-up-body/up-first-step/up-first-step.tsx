import React, { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import StyledButton from "../../styled-button";
import StyledLabelText from "../../styled-label-text";
import { useAppDispatch, useAppSelector } from "../../../state";
import registerState from '../../../state/register'
import globalState from "../../../state/global";
import lawyerState from '../../../state/lawyer-info'
import clientState from '../../../state/client-info'
import emailSvg from './email.svg'
import back from '../../../shared/utils/back1.svg'
import user from '../../sign-in-body/in-first-step/user.svg'
import validatePassword from "../../../services/auth/validate-email";

const UpFirstStep: FunctionComponent<Props> = ({ className, onNext, setLawyer }) => {
  const [userType, setUserType] = useState('client')
  const [alert, setAlert] = useState(false)
  const [spinning, setSpinning] = useState<boolean>(false)
  const { first_name, last_name, email } = useAppSelector(state => state.registerState)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onCancel = () => {
    dispatch(registerState.actions.setFirstName(''))
    dispatch(registerState.actions.setLastName(''))
    dispatch(registerState.actions.setEmail(''))
    router.push('/')
  }

  const onSelectUserType = (userType: string) => {
    setUserType(userType)
  }

  const onClickAsClient = () => {
    setSpinning(true)
    if (!first_name || !last_name || !email) return setSpinning(false)

    validatePassword(userType, email)
      .then(res => {
        if(!res) {
          setAlert(true)
          setSpinning(false)
          return
        }
        dispatch(clientState.actions.setFirstName(first_name))
        dispatch(clientState.actions.setLastName(last_name))
        dispatch(clientState.actions.setEmail(email))
        onNext!()
      }).catch(error => {console.error(error); setSpinning(false)})
  }

  const onClickAsLawyer = () => {
    setSpinning(true)
    if (!first_name || !last_name || !email) return setSpinning(false)

    validatePassword(userType, email)
      .then(res => {
        if(!res) {
          setAlert(true)
          setSpinning(false)
          return
        }
        dispatch(lawyerState.actions.setFirstName(first_name))
        dispatch(lawyerState.actions.setLastName(last_name))
        dispatch(lawyerState.actions.setEmail(email))
        setLawyer!()
        onNext!()
      }).catch(error => {console.error(error); setSpinning(false)})
  }

  const onGoSignIn = () => {
    dispatch(globalState.actions.setSign('SignIn'))
  }

  useEffect(() => {
    setAlert(false)
  }, [email])
  
  return (
    <div className={className}>
      <div className="back-image"><Image onClick={onCancel} src={back} height={50} width={50} /></div>
      <div className="signup-body-container">
        <div className="signup-title">
          <div className={`signup-btn ${userType === 'client' ? '' : 'overshadowed'}`} onClick={() => onSelectUserType('client')}>Client</div>
          <div className={`signup-btn ${userType === 'lawyer' ? '' : 'overshadowed'}`} onClick={() => onSelectUserType('lawyer')}>Lawyer</div>
        </div>
        {alert && <div className="signup-error">Email already in use</div>}
        <form className="signup-form">
          <StyledLabelText placeHolder="First Name" image={user} name="firstName" req value={first_name} onChange={e => dispatch(registerState.actions.setFirstName(e.target.value))} autof type="text" />
          <StyledLabelText placeHolder="Last Name" image={user} name="lastName" req value={last_name} onChange={e => dispatch(registerState.actions.setLastName(e.target.value))} type="text" />
          <StyledLabelText placeHolder="Email" image={emailSvg} name="email" req value={email} onChange={e => dispatch(registerState.actions.setEmail(e.target.value))} type="email" />
        </form>
        <span className="signup-account">Already have an account? <div className="signup-account-link" onClick={onGoSignIn}>Sign In here</div></span>
        <div className="signup-btns">
          <StyledButton luxury text="Cancel" onClick={onCancel} />
          <Spin spinning={spinning} indicator={<LoadingOutlined style={{color: '#fff'}}/>}>
            <StyledButton luxury text="Next Step" onClick={userType === 'lawyer' ? onClickAsLawyer : onClickAsClient} />
          </Spin>
        </div>
      </div>
    </div>
  )
}

export default UpFirstStep

interface Props {
  className?: string;
  onNext?: () => void;
  setLawyer?: () => void;
}
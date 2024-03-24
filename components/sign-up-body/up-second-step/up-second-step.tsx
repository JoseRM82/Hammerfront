import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "../../../state";
import StyledButton from "../../styled-button";
import StyledLabelText from "../../styled-label-text";
import registerState from '../../../state/register'
import clientState from '../../../state/client-info'
import lawyerState from '../../../state/lawyer-info'
import globalState from '../../../state/global'
import pass from '../../sign-in-body/in-first-step/pass.svg'
import back from '../../../shared/utils/back1.svg'
import { UserType } from "../../../state/user/types";
import createToken from "../../../services/auth/create-token";

const UpSecondStep: FunctionComponent<Props> = ({ className, onNext, lawyer }) => {
  const { first_password, second_password } = useAppSelector(state => state.registerState)
  const { clientFirstName, clientLastName, clientEmail } = useAppSelector(state => ({
    clientFirstName: state.clientState.first_name,
    clientLastName: state.clientState.last_name,
    clientEmail: state.clientState.email,
  }))
  const { lawyerFirstName, lawyerLastName, lawyerEmail } = useAppSelector(state => ({
    lawyerFirstName: state.lawyerState.first_name,
    lawyerLastName: state.lawyerState.last_name,
    lawyerEmail: state.lawyerState.email,
  }))
  const [alert, setAlert] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onCancel = () => {
    router.push('/')
  }

  const userType = lawyer ? UserType.Lawyer : UserType.Client

  const onSetPassword = () => {
    if (first_password !== second_password) {
      setAlert(true)
      return
    } 
    
    if(lawyer){
      createToken(userType, lawyerFirstName, lawyerLastName, lawyerEmail, first_password)
        .then(res => {
          if(!res.success) {
            return
          }
          dispatch(lawyerState.actions.setToken(res.data))
          dispatch(lawyerState.actions.setPassword(first_password))
          onNext!()
          return
        }).catch(error => console.error(error))
    } else {
      createToken(userType, clientFirstName, clientLastName, clientEmail, first_password)     
        .then(res => {
          if(!res.success) {
            return
          }
          dispatch(clientState.actions.setToken(res.data))
          dispatch(clientState.actions.setPassword(first_password))
          onNext!()
          return
        }).catch(error => console.error(error))                  
    }
  }

  const onGoSignIn = () => {
    dispatch(globalState.actions.setSign('SignIn'))
  }

  return (
    <div className={className}>
      <div className="back-image"><Image onClick={onCancel} src={back} height={50} width={50} /></div>
      <div className="signup-body-container">
        <h1 className="signup-second-title">Set your password</h1>
        {alert && <div className="signup-error">Passwords are different</div>}
        <form className="signup-second-form" id="second-form">
          <StyledLabelText image={pass} name="password" req placeHolder="Password" value={first_password} onChange={e => dispatch(registerState.actions.setFirstPassword(e))} autof type="password" />
          <StyledLabelText image={pass} name="passwordValidate" req placeHolder="Confirm Password" value={second_password} onChange={e => dispatch(registerState.actions.setSecondPassword(e))} type="password" />
        </form>
        <span className="signup-second-account">Already have an account? <div className="signup-second-account-link" onClick={onGoSignIn}>Click here</div></span>
        <div className="signup-second-btns">
          <StyledButton luxury text="Cancel" onClick={onCancel} />
          <StyledButton luxury text="Next Step" onClick={onSetPassword} />
        </div>
      </div>
    </div>
  )
}

export default UpSecondStep

interface Props {
  className?: string;
  lawyer?: boolean;
  onNext?: () => void;
}
import Link from "next/link";
import React, { FunctionComponent, useCallback, useState } from "react";
import { useRouter } from "next/router";

import StyledButton from "../../styled-button";
import StyledLabelText from "../../styled-label-text";
import { useAppDispatch, useAppSelector } from "../../../state";
import { UserType } from "../../../state/user/types";
import preRegister from "../../../services/auth/pre-register";
import registerState from '../../../state/register'
import setTokenUser from "../../../state/user/actions/set-user-token";
import setToken from "../../../state/user/actions/set-token";
import globalState from "../../../state/global";
import emailSvg from './email.svg'
import user from '../../sign-in-body/in-first-step/user.svg'
import { USER_TOKEN, USER_TYPE } from "../../../shared/constants/local";

const UpFirstStep: FunctionComponent<Props> = ({ className, onNext, setLawyer }) => {
  const [userType, setUserType] = useState('client')
  const { first_name, last_name, email } = useAppSelector(state => state.registerState)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const client = UserType.Client
  const lawyer = UserType.Lawyer

  const onCancel = () => {
    localStorage.removeItem(USER_TOKEN)
    localStorage.removeItem(USER_TYPE)
    dispatch(globalState.actions.setClientActive(false))
    dispatch(globalState.actions.setLawyerActive(false))
    router.push('/')
  }

  const onSelectUserType = (userType: string) => {
    setUserType(userType)
  }

  const onClickAsClient = useCallback(() => {
    if (first_name && last_name && email) {
      preRegister(email, first_name, last_name, client)
        .then(response => {
          if (response.success) {
            dispatch(setToken(response.data!.token))
            dispatch(setTokenUser(UserType.Client))
          }
        })
        .then(() => onNext?.())
        .catch(error => console.error(error))
    }
  }, [first_name, last_name, email])

  const onClickAsLawyer = useCallback(() => {
    if (first_name && last_name && email) {
      preRegister(email, first_name, last_name, lawyer)
        .then(response => {
          if (response.success) {
            dispatch(setToken(response.data!.token))
            dispatch(setTokenUser(UserType.Lawyer))
          }
        })
        .then(() => {
          setLawyer?.();
          onNext?.()
        })
        .catch(error => console.error(error))
    }

  }, [first_name, last_name, email])

  const onGoSignIn = () => {
    dispatch(globalState.actions.setSign('SignIn'))
  }
  
  return (
    <div className={className}>
      <div className="signup-title">
        <div className={`signup-btn ${userType === 'client' ? '' : 'overshadowed'}`} onClick={() => onSelectUserType('client')}>Client</div>
        <div className={`signup-btn ${userType === 'lawyer' ? '' : 'overshadowed'}`} onClick={() => onSelectUserType('lawyer')}>Lawyer</div>
      </div>
      <form className="signup-form">
        <StyledLabelText placeHolder="First Name" image={user} name="firstName" req value={first_name} onChange={e => dispatch(registerState.actions.setFirstName(e.target.value))} autof type="text" />
        <StyledLabelText placeHolder="Last Name" image={user} name="lastName" req value={last_name} onChange={e => dispatch(registerState.actions.setLastName(e.target.value))} type="text" />
        <StyledLabelText placeHolder="Email" image={emailSvg} name="email" req value={email} onChange={e => dispatch(registerState.actions.setEmail(e.target.value))} type="email" />
      </form>
      <span className="signup-account">Already have an account? <div className="signup-account-link" onClick={onGoSignIn}>Sign In here</div></span>
      <div className="signup-btns">
        <StyledButton luxury text="Cancel" white onClick={onCancel} />
        <StyledButton luxury text="Register" onClick={userType === 'lawyer' ? onClickAsLawyer : onClickAsClient} />
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
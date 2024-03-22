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
        <StyledButton className={`signup-btn ${userType === 'client' ? '' : 'overshadowed'}`} text="Client" onClick={() => onSelectUserType('client')} />
        <StyledButton className={`signup-btn ${userType === 'lawyer' ? '' : 'overshadowed'}`} text="Lawyer" onClick={() => onSelectUserType('lawyer')} />
      </div>
      <form className="signup-form">
        <StyledLabelText name="firstName" req value={first_name} onChange={e => dispatch(registerState.actions.setFirstName(e.target.value))} autof type="text" />
        <StyledLabelText name="lastName" req value={last_name} onChange={e => dispatch(registerState.actions.setLastName(e.target.value))} type="text" />
        <StyledLabelText name="email" req value={email} onChange={e => dispatch(registerState.actions.setEmail(e.target.value))} type="email" />
      </form>
      <span className="signup-account">Already have an account? <div className="sign-change" onClick={onGoSignIn}>Sign In here</div></span>
      <div className="signup-btns">
        <StyledButton text="Cancel" white onClick={onCancel} />
        <StyledButton text="Next" onClick={userType === 'lawyer' ? onClickAsLawyer : onClickAsClient} />
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
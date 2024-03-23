import Link from "next/link";
import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "../../../state";
import StyledButton from "../../styled-button";
import StyledLabelText from "../../styled-label-text";
import registerState from '../../../state/register'
import createPassword from "../../../services/auth/create-password";
import globalState from '../../../state/global'
import pass from '../../sign-in-body/in-first-step/pass.svg'
import { UserType } from "../../../state/user/types";
import { USER_TOKEN, USER_TYPE } from "../../../shared/constants/local";

const UpSecondStep: FunctionComponent<Props> = ({ className, onNext, lawyer }) => {
  const { first_password, second_password } = useAppSelector(state => state.registerState)
  const [active, setActive] = useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onCancel = () => {
    localStorage.removeItem(USER_TOKEN)
    localStorage.removeItem(USER_TYPE)
    dispatch(globalState.actions.setClientActive(false))
    dispatch(globalState.actions.setLawyerActive(false))
    router.push('/')
  }

  const userType = lawyer ? UserType.Lawyer : UserType.Client

  const onSetPassword = () => {
    createPassword(first_password, userType).then(() => onNext?.()).catch(error => console.error(error))
  }

  const onMatchingPassword = (e: React.ChangeEvent<HTMLInputElement>, on: 'first' | 'second') => {
    const value = e.target.value

    if (on === 'first') {
      dispatch(registerState.actions.setFirstPassword(value))
      setActive(second_password === on)

    } else {
      dispatch(registerState.actions.setSecondPassword(value))
      setActive(first_password === on)

    }

  }

  const onGoSignIn = () => {
    dispatch(globalState.actions.setSign('SignIn'))
  }

  return (
    <div className={className}>
      <h1 className="signup-second-title">Set your password</h1>
      <form className="signup-second-form" id="second-form">
        <StyledLabelText image={pass} name="password" req placeHolder="Password" value={first_password} onChange={e => onMatchingPassword(e, 'first')} autof type="password" />
        <StyledLabelText image={pass} name="passwordValidate" req placeHolder="Confirm Password" value={second_password} onChange={e => onMatchingPassword(e, 'second')} type="password" />
      </form>
      <span className="signup-second-account">Already have an account? <div className="signup-second-account-link" onClick={onGoSignIn}>Click here</div></span>
      <div className="signup-second-btns">
        <StyledButton luxury text="Cancel" white onClick={onCancel} />
        <StyledButton luxury text="Next Step" active={active} onClick={onSetPassword} />
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
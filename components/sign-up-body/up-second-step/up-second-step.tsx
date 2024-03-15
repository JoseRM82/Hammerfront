import Link from "next/link";
import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "../../../state";
import StyledButton from "../../styled-button";
import StyledLabelText from "../../styled-label-text";
import registerState from '../../../state/register'
import createPassword from "../../../services/auth/create-password";
import globalState from '../../../state/global'
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

  return (
    <div className={className}>
      <h1 className="signup-second-title">Sign Up</h1>
      <form className="signup-second-form" id="second-form">
        <StyledLabelText name="password" req text="Set your Password:" value={first_password} onChange={e => onMatchingPassword(e, 'first')} autof type="password" />
        <StyledLabelText name="passwordValidate" req text="Confirm your Password:" value={second_password} onChange={e => onMatchingPassword(e, 'second')} type="password" />
      </form>
      <span className="signup-second-account">Already have an account? <Link href={'/sign-in'}>Click here</Link></span>
      <div className="signup-second-btns">
        <StyledButton text="Cancel" white onClick={onCancel} />
        <StyledButton text="Next" active={active} onClick={onSetPassword} />
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
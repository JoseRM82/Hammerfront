import Link from "next/link";
import { FunctionComponent, useCallback, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../state";
import StyledButton from "../../styled-button";
import StyledLabelText from "../../styled-label-text";
import loginState from '../../../state/login'
import globalState from '../../../state/global'
import login from "../../../services/auth/login";
import setTokenUser from "../../../state/user/actions/set-user-token";
import setToken from "../../../state/user/actions/set-token";
import { UserType } from "../../../state/user/types";
import { useRouter } from "next/router";

const InFirstStep: FunctionComponent<Props> = ({ className }) => {
  const [userType, setUserType] = useState('client')
  const { email, password } = useAppSelector(state => state.loginState)
  const dispatch = useAppDispatch()
  const route = useRouter()

  const onSelectUserType = (userType: string) => {
    setUserType(userType)
  }

  const onLogin = useCallback(() => {
    if (email && password) {
      login(email, password, userType)
        .then(response => {
          if (response.success) {
            if (userType === 'client') {
              dispatch(globalState.actions.setClientActive(true))
              dispatch(globalState.actions.setLawyerActive(false))
              dispatch(setTokenUser(UserType.Client))

            } else if (userType === 'lawyer') {
              dispatch(globalState.actions.setClientActive(false))
              dispatch(globalState.actions.setLawyerActive(true))
              dispatch(setTokenUser(UserType.Lawyer))

            }

            dispatch(setToken(response.data!))

          }
        })
        .catch(error => console.error(error))
        .finally(() => route.push('/'))
    }
  }, [email, password, userType])

  return (
    <div className={className}>
      <h1 className="signin-title">Sign In as
        <StyledButton className={`signin-btn ${userType === 'client' ? '' : 'overshadowed'}`} text="Client" onClick={() => onSelectUserType('client')} />
        <StyledButton className={`signin-btn ${userType === 'lawyer' ? '' : 'overshadowed'}`} text="Lawyer" onClick={() => onSelectUserType('lawyer')} /></h1>
      <form className="signin-form" id='sign-in'>
        <StyledLabelText name="email" text="Enter your email" type="email" req autof value={email} onChange={e => dispatch(loginState.actions.setEmail(e.target.value))} />
        <StyledLabelText name="password" text="Enter your password" type="password" req value={password} onChange={e => dispatch(loginState.actions.setPassword(e.target.value))} />
      </form>
      <span className="signin-account">Don't have an account yet? <Link href={'/sign-up'}>Click here</Link></span>
      <div className="signin-btns">
        <StyledButton white text="Cancel" />
        <StyledButton type="button" form="sign-in" text="Continue" onClick={onLogin} />
      </div>
    </div>
  )
}

export default InFirstStep

interface Props {
  className?: string;
}
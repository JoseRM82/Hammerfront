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
import userState from "../../../state/user/index";
import { UserType } from "../../../state/user/types";
import { useRouter } from "next/router";
import setName from "../../../state/user/actions/set-name";
import setId from "../../../state/user/actions/set-id";
import { USER_ID, USER_NAME, USER_TOKEN, USER_TYPE } from "../../../shared/constants/local";

const InFirstStep: FunctionComponent<Props> = ({ className }) => {
  const [userType, setUserType] = useState('')
  const [noUserType, setNoUserType] = useState(false)
  const [noField, setNoField] = useState(false)
  const [failedLogin, setFailedLogin] = useState(false)
  const { email, password } = useAppSelector(state => state.loginState)
  const dispatch = useAppDispatch()
  const route = useRouter()

  const onSelectUserType = (userType: string) => {
    setUserType(userType)
  }

  const onLogin = useCallback(() => {
    if (email && password && userType) {
      setNoField(false)
      setNoUserType(false)
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
            const userToken = response.data!.token
            const userInfo = {name: response.data!.name, last_name: response.data!.last_name}
            const userId = response.data!._id

            if(!userId || !userInfo || !userToken) {
              localStorage.removeItem(USER_TYPE)
              localStorage.removeItem(USER_NAME)
              localStorage.removeItem(USER_ID)
              localStorage.removeItem(USER_TOKEN)
              route.push('/sign-in')
            }
            
            dispatch(setId(userId))
            dispatch(setName(userInfo))
            dispatch(setToken(userToken))
            route.push('/cases')

          }
        }).catch(error => {console.error(error), setFailedLogin(true)}) 
        .catch(error => console.error(error))
    } else if(!userType && (!email || !password)) {
      setNoUserType(true)
      setNoField(true)
      setFailedLogin(false)

    } else if(!userType){
      setNoUserType(true)
      setNoField(false)
      setFailedLogin(false)

    } else if(!email || !password) {
      setNoField(true)
      setNoUserType(false)
      setFailedLogin(false)
    
    }
  }, [email, password, userType])

  const onCancel = () => {
    route.push('/')
  }

  return (
    <div className={className}>
      <h1 className="signin-title">Sign In as
        <StyledButton className={`signin-btn ${userType === 'client' ? '' : 'overshadowed'}`} text="Client" onClick={() => onSelectUserType('client')} />
        <StyledButton className={`signin-btn ${userType === 'lawyer' ? '' : 'overshadowed'}`} text="Lawyer" onClick={() => onSelectUserType('lawyer')} /></h1>
        <div>
          {noUserType && <div className="signin-error">Client or Lawyer must be selected</div>}
          {noField && <div className="signin-error">Both fields must be filled</div>}
          {failedLogin && <div className="signin-error">This user doesn&lsquot exist</div>}
        </div>
      <form className="signin-form" id='sign-in'>
        <StyledLabelText name="email" text="Enter your email" type="email" req autof value={email} onChange={e => dispatch(loginState.actions.setEmail(e.target.value))} />
        <StyledLabelText name="password" text="Enter your password" type="password" req value={password} onChange={e => dispatch(loginState.actions.setPassword(e.target.value))} />
      </form>
      <span className="signin-account">Don&lsquot have an account yet? <Link href={'/sign-up'}>Click here</Link></span>
      <div className="signin-btns">
        <StyledButton white text="Cancel" onClick={onCancel} />
        <StyledButton type="button" form="sign-in" text="Continue" onClick={onLogin} />
      </div>
    </div>
  )
}

export default InFirstStep

interface Props {
  className?: string;
}
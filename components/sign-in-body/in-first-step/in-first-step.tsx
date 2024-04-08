import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../../state";
import user from './user.svg'
import pass from './pass.svg'
import hide from '../../../shared/utils/dno-reveal.svg'
import reveal from '../../../shared/utils/dreveal.svg'
import back1 from '../../../shared/utils/back1.svg'
import StyledButton from "../../styled-button";
import StyledLabelText from "../../styled-label-text";
import loginState from '../../../state/login'
import globalState from '../../../state/global'
import login from "../../../services/auth/login";
import setTokenUser from "../../../state/user/actions/set-user-token";
import setToken from "../../../state/user/actions/set-token";
import { UserType } from "../../../state/user/types";
import { useRouter } from "next/router";
import setName from "../../../state/user/actions/set-name";
import setId from "../../../state/user/actions/set-id";
import { USER_ID, USER_NAME, USER_TOKEN, USER_TYPE } from "../../../shared/constants/local";
import Image from "next/image";

const InFirstStep: FunctionComponent<Props> = ({ className }) => {
  const [userType, setUserType] = useState('client')
  const [noUserType, setNoUserType] = useState(false)
  const [noField, setNoField] = useState(false)
  const [hidePass, setHidePass] = useState<boolean>(true)
  const [spinning, setSpinning] = useState<boolean>(false)
  const [failedLogin, setFailedLogin] = useState(false)
  const { email, password } = useAppSelector(state => state.loginState)
  const dispatch = useAppDispatch()
  const route = useRouter()

  const onSelectUserType = (userType: string) => {
    setUserType(userType)
  }

  const onLogin = useCallback(() => {
    setSpinning(true)
    if(!userType && (!email || !password)) {
     setNoUserType(true)
     setNoField(true)
     setFailedLogin(false)
     setSpinning(false)

    } else if(!userType){
     setNoUserType(true)
     setNoField(false)
     setFailedLogin(false)
     setSpinning(false)

    } else if(!email || !password) {
     setNoField(true)
     setNoUserType(false)
     setFailedLogin(false)
     setSpinning(false)

    } else if (email && password && userType) {
      console.log('email: ', email)
      console.log('password: ', password)
      console.log('user type: ', userType)
      setNoField(false)
      setNoUserType(false)
      login(email, password, userType)
        .then(response => {
          if(!response.success) {
            setSpinning(false)
            return 
          } else if (response.success) {
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
              setSpinning(false)
            }
            
            dispatch(setId(userId))
            dispatch(setName(userInfo))
            dispatch(setToken(userToken))
            route.push('/cases')
          }
        }).catch(error => {console.error(error); setFailedLogin(true); setSpinning(false)}) 
    }
  }, [email, password, userType])

  useEffect(() => {
    dispatch(loginState.actions.setEmail(''))
    dispatch(loginState.actions.setPassword(''))
  }, [])

  const onCancel = () => {
    route.push('/')
  }

  const onGoToSignUp = () => {
    dispatch(globalState.actions.setSign('SignUp'))
  }

  return (
    <div className={className}>
      <div className="back-image"><Image onClick={onCancel} src={back1} height={50} width={50} /></div>
      <div className="signin-body-container">
        <div className="signin-title">
          <div className={`signin-btn ${userType === 'client' ? '' : 'overshadowed'}`} onClick={() => onSelectUserType('client')} >Client</div>
          <div className={`signin-btn ${userType === 'lawyer' ? '' : 'overshadowed'}`} onClick={() => onSelectUserType('lawyer')} >Lawyer</div>
        </div>
        <div>
          {noUserType && <div className="signin-error">Client or Lawyer must be selected</div>}
          {noField && <div className="signin-error">Both fields must be filled</div>}
          {failedLogin && <div className="signin-error">This user does not exist</div>}
        </div>
        <form className="signin-form" id='sign-in' autoComplete="false" >
          <StyledLabelText image={user} placeHolder="Email" name="email" type="email" req autoComplete='false' value={email} onChange={e => dispatch(loginState.actions.setEmail(e.target.value))} />
          <StyledLabelText pass={hidePass ? reveal : hide} onReveal={() => setHidePass(!hidePass)} image={pass} placeHolder="Password" name="password" type={hidePass ? "password" : "text"} req value={password} onChange={e => dispatch(loginState.actions.setPassword(e.target.value))} />
        </form>
        <span className="signin-account">Do not have an account yet? <div className="signin-account-link" onClick={onGoToSignUp}>Create it here</div></span>
        <div className="signin-btns">
          <StyledButton luxury text="Cancel" onClick={onCancel} />
          <Spin spinning={spinning} indicator={<LoadingOutlined style={{color: '#fff'}}/>}>
            <StyledButton luxury type="button" form="sign-in" text="Sign In" onClick={onLogin} />
          </Spin>
        </div>
      </div>
    </div>
  )
}

export default InFirstStep

interface Props {
  className?: string;
  sign?: boolean;
}
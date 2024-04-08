import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import StyledButton from "../../styled-button";
import StyledLabelText from "../../styled-label-text";
import globalState from "../../../state/global";
import registerState from "../../../state/register";
import back from '../../../shared/utils/back1.svg'
import { useAppDispatch, useAppSelector } from "../../../state";
import { USER_ID, USER_NAME, USER_TOKEN, USER_TYPE } from "../../../shared/constants/local";
import createLawyer from "../../../services/lawyer/create-lawyer";
import createClient from "../../../services/client/create-client";

const UpThirdStep: FunctionComponent<Props> = ({ className, onBack, lawyer }) => {
  const { register, handleSubmit } = useForm()
  const getValues = { register }
  const { clientFirstName, clientLastName, clientToken, clientEmail, clientPass } = useAppSelector(state => ({
    clientFirstName: state.clientState.first_name,
    clientLastName: state.clientState.last_name,
    clientToken: state.clientState.token,
    clientEmail: state.clientState.email,
    clientPass: state.clientState.password
  }))
  const { lawyerFirstName, lawyerLastName, lawyerToken, lawyerEmail, lawyerPass } = useAppSelector(state => ({
    lawyerFirstName: state.lawyerState.first_name,
    lawyerLastName: state.lawyerState.last_name,
    lawyerToken: state.lawyerState.token,
    lawyerEmail: state.lawyerState.email,
    lawyerPass: state.lawyerState.password,
  }))
  const [spinning, setSpinning] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onCancel = () => {
    dispatch(registerState.actions.setFirstName(''))
    dispatch(registerState.actions.setLastName(''))
    dispatch(registerState.actions.setEmail(''))
    dispatch(registerState.actions.setFirstPassword(''))
    dispatch(registerState.actions.setSecondPassword(''))
    router.push('/')
  }

  const onClickBack = () => {
    onBack?.()
  }

  const onSetClientInfo = (body: any) => {
    setSpinning(true)
    createClient(body, clientFirstName, clientLastName, clientEmail, clientPass, clientToken)
      .then(res => {
        if(!res.success) return setSpinning(false)

        localStorage.setItem(USER_NAME, `${clientFirstName} ${clientLastName}`)
        localStorage.setItem(USER_ID, res.data)
        localStorage.setItem(USER_TOKEN, clientToken)
        localStorage.setItem(USER_TYPE, 'client')
        dispatch(globalState.actions.setClientActive(true))
        router.push('/cases')
      }).catch(error => {console.error(error); setSpinning(false)})
  }

  const onSetLawyerInfo = (body: any) => {
    setSpinning(true)
    createLawyer(body, lawyerFirstName, lawyerLastName, lawyerEmail, lawyerPass, lawyerToken)
      .then(res => {
        if(!res.success) return setSpinning(false)

        localStorage.setItem(USER_NAME, `${lawyerFirstName} ${lawyerLastName}`)
        localStorage.setItem(USER_ID, res.data)
        localStorage.setItem(USER_TOKEN, lawyerToken)
        localStorage.setItem(USER_TYPE, 'lawyer')
        dispatch(globalState.actions.setLawyerActive(true))
        router.push('/cases')
      }).catch(error => {console.error(error); setSpinning(false)})
  }

  const onGoSignIn = () => {
    dispatch(globalState.actions.setSign('SignIn'))
  }

  return (
    <div className={className}>
      <div className="back-image"><Image onClick={onClickBack} src={back} height={50} width={50} /></div>
      <div className="signup-third-body-container">
        <h1 className="signup-third-title">Set your information</h1>
        <form className="signup-third-form" onSubmit={lawyer ? handleSubmit((body) => onSetLawyerInfo(body)) : handleSubmit((body) => onSetClientInfo(body))} id="third-form" >
          <div className="signup-third-container">
            <StyledLabelText handleInput={getValues} name='identification' autof req placeHolder={lawyer ? "Tuition ID" : "National ID"} type="text" />
            {lawyer && <StyledLabelText handleInput={getValues} name='university' req placeHolder="University you graduated from" type="text" />}
            {lawyer && <StyledLabelText handleInput={getValues} name='specialty_branch' placeHolder="Specialty branch" type="text" />}
            {lawyer && <StyledLabelText handleInput={getValues} name='experience' req placeHolder="Time working as lawyer" type="text" />}
            <StyledLabelText handleInput={getValues} name='birthdate' req placeHolder="Birthdate (YYYY/MM/DD)" type="text" />
            <StyledLabelText handleInput={getValues} name='country' req placeHolder="Country" type="text" />
            {lawyer && <StyledLabelText handleInput={getValues} name='work_area' req placeHolder="Cities where you can work" type="text" />}
            <StyledLabelText handleInput={getValues} name='zip_code' req placeHolder="Zip Code" type="text" />
            <StyledLabelText handleInput={getValues} name='languages' req placeHolder="Language(s)" type="text" />
            <StyledLabelText handleInput={getValues} name='phone_number' req placeHolder="Phone Number" type="text" />
            {lawyer && <StyledLabelText handleInput={getValues} className="" name='photo' placeHolder="Add your photo" type='submit'/>}
          </div>
        </form>
        <div className="signup-third-selection">
          <span className="signup-third-account">Already have an account? <div className="signup-third-account-link" onClick={onGoSignIn}>Sign In here</div></span>
          <div className="signup-third-btns">
            <StyledButton luxury text="Cancel" onClick={onCancel} />
            <Spin spinning={spinning} indicator={<LoadingOutlined style={{color: '#fff'}}/>}>
              <StyledButton luxury text="Register" form="third-form" />
            </Spin>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpThirdStep

interface Props {
  className?: string;
  lawyer?: boolean;
  onBack?: () => void;
}
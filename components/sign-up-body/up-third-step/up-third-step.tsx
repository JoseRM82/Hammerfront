import Link from "next/link";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import StyledButton from "../../styled-button";
import setClientInfo from "../../../services/client/set-client-info";
import setLawyerInfo from "../../../services/lawyer/set-lawyer-info";
import StyledLabelText from "../../styled-label-text";
import globalState from "../../../state/global";
import { useAppDispatch } from "../../../state";
import { USER_TOKEN, USER_TYPE } from "../../../shared/constants/local";

const UpThirdStep: FunctionComponent<Props> = ({ className, lawyer }) => {
  const { register, handleSubmit } = useForm()
  const getValues = { register }
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onCancel = () => {
    localStorage.removeItem(USER_TOKEN)
    localStorage.removeItem(USER_TYPE)
    dispatch(globalState.actions.setClientActive(false))
    dispatch(globalState.actions.setLawyerActive(false))
    router.push('/')
  }

  const onSetClientInfo = (body: any) => {
    setClientInfo(body)
      .then(response => {
        if (response.success) {
          dispatch(globalState.actions.setClientActive(true))
          dispatch(globalState.actions.setLawyerActive(false))
        }
      })
      .then(() => router.push('/cases'))
      .catch(error => console.error(error))
  }

  const onSetLawyerInfo = (body: any) => {
    setLawyerInfo(body)
      .then(response => {
        if (response.success) {
          dispatch(globalState.actions.setLawyerActive(true))
          dispatch(globalState.actions.setClientActive(false))
        }
      })
      .then(() => router.push('/cases'))
      .catch(error => console.error(error))
  }

  const onGoSignIn = () => {
    dispatch(globalState.actions.setSign('SignIn'))
  }

  return (
    <div className={className}>
      <h1 className="signup-third-title">Sign Up</h1>
      <form className="signup-third-form" onSubmit={lawyer ? handleSubmit(onSetLawyerInfo) : handleSubmit(onSetClientInfo)} id="third-form" >
        <div className="signup-third-container">
          <StyledLabelText handleInput={getValues} name='identification' autof req placeHolder={lawyer ? "Tuition ID" : "ID"} type="text" />
          {lawyer && <StyledLabelText handleInput={getValues} name='university' req placeHolder="University you graduated from" type="text" />}
          {lawyer && <StyledLabelText handleInput={getValues} name='specialty_branch' placeHolder="Specialty branch" type="text" />}
          {lawyer && <StyledLabelText handleInput={getValues} name='graduated_at' req placeHolder="Time working as lawyer" type="text" />}
          <StyledLabelText handleInput={getValues} name='birthdate' req placeHolder="Birthdate (YYYY/MM/DD)" type="text" />
          <StyledLabelText handleInput={getValues} name='country' req placeHolder="Country" type="text" />
          {!lawyer && <StyledLabelText handleInput={getValues} name='state' placeHolder='State' req />}
          {!lawyer && <StyledLabelText handleInput={getValues} name='city' req placeHolder="City" type="text" />}
          {lawyer && <StyledLabelText handleInput={getValues} name='work_area' req placeHolder="Cities where you can work" type="text" />}
          <StyledLabelText handleInput={getValues} name='zip_code' req placeHolder="Zip Code" type="text" />
          <StyledLabelText handleInput={getValues} name='languages' req placeHolder="Language(s)" type="text" />
          <StyledLabelText handleInput={getValues} name='phone_number' placeHolder="Phone Number" type="text" />
          {lawyer && <StyledLabelText handleInput={getValues} className="" name='photo' req placeHolder="Add your photo" type='submit'/>}
        </div>
        {lawyer && <StyledLabelText handleInput={getValues} name='description' req placeHolder="A description about you" type="text" description />}
      </form>
      <div className="signup-third-selection">
        <div className="signup-third-btns">
          <StyledButton luxury text="Cancel" white onClick={onCancel} />
          <StyledButton luxury text="Register" form="third-form" />
        </div>
        <span className="signup-third-account">Already have an account? <div className="signup-third-account-link" onClick={onGoSignIn}>Click here</div></span>
      </div>
    </div>
  )
}

export default UpThirdStep

interface Props {
  className?: string;
  lawyer?: boolean;
}
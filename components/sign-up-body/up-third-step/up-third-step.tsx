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

  return (
    <div className={className}>
      <h1 className="signup-third-title">Sign Up</h1>
      <form className="signup-third-form" onSubmit={lawyer ? handleSubmit(onSetLawyerInfo) : handleSubmit(onSetClientInfo)} id="third-form" >
        <div className="signup-third-upcontainer">
          <StyledLabelText handleInput={getValues} name='identification' autof req text={lawyer ? "Tuition ID:" : "ID:"} type="text" />
          {lawyer && <StyledLabelText handleInput={getValues} name='university' req text="University you graduated from:" type="text" />}
          {lawyer && <StyledLabelText handleInput={getValues} name='specialty_branch' text="Specialty branch:" type="text" />}
          {lawyer && <StyledLabelText handleInput={getValues} name='graduated_at' req text="Time working as lawyer:" type="text" />}
          <StyledLabelText handleInput={getValues} name='birthdate' req text="Birthdate:" type="text" />
          <StyledLabelText handleInput={getValues} name='country' req text="Country:" type="text" />
          {!lawyer && <StyledLabelText handleInput={getValues} name='state' text='State:' req />}
          <StyledLabelText handleInput={getValues} name='city' req text="City:" type="text" />
          <StyledLabelText handleInput={getValues} name='adress' req text="Adress:" type="text" />
          {lawyer && <StyledLabelText handleInput={getValues} name='work_area' req text="Cities where you can work:" type="text" />}
          <StyledLabelText handleInput={getValues} name='zip_code' req text="Zip Code:" inputMode="numeric" type="number" />
          <StyledLabelText handleInput={getValues} name='languages' req text="Language(s):" type="text" />
          <StyledLabelText handleInput={getValues} name='phone_number' text="Phone Number:" inputMode="numeric" type="number" />
        </div>
        {lawyer && <StyledLabelText handleInput={getValues} name='photo' req text="Add your photo:" />}
        {lawyer && <StyledLabelText handleInput={getValues} name='description' req text="A description about you:" type="text" description />}
      </form>
      <span className="signup-third-account">Already have an account? <Link className="signup-third-link" href={'/sign-in'}>Click here</Link></span>
      <div className="signup-third-btns">
        <StyledButton text="Cancel" white onClick={onCancel} />
        <StyledButton text="Continue" form="third-form" />
      </div>
    </div>
  )
}

export default UpThirdStep

interface Props {
  className?: string;
  lawyer?: boolean;
}
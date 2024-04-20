import Image from "next/image";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { useAppSelector } from "../../../state";
import StyledButton from "../../styled-button";

const WorkWithUs: FunctionComponent<Props> = ({ className }) => {
  const {client, lawyer} = useAppSelector(state => state.globalState)
  const route = useRouter()

  const onSignUp = () => {
    route.push('/sign-up')
  }

  return (
    <div className={className}>
      <h1 className="work-mobile-title">Want to try another way to work?</h1>
      <div className="work-wu-container">
        <div className="img-container">
          <div className="work-img"/>
          <div className="work-mobile-img"/>
          <div className="work-mobile-text">The efficiency of our platform and user-centric design make collaboration seamless and enjoyable. Trust in our commitment to excellence and innovation to manage your cases and achieve outstanding results.</div>
        </div>
        <div className="text-container">
          <h1 className="work-title">Want to try another way to work?</h1>
          <div className="work-text">The efficiency of our platform and user-centric design make collaboration seamless and enjoyable. Trust in our commitment to excellence and innovation to manage your cases and achieve outstanding results. Partner with us for a rewarding and productive experience.</div>
          {(!client && !lawyer) && <StyledButton white text="Work with us" onClick={onSignUp} />}
        </div>
      </div>
    </div>
  )
}

export default WorkWithUs

interface Props {
  className?: string;
}
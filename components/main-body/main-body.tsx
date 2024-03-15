import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import StyledButton from "../styled-button";
import Statistics from "./statistics/list";
import WhyUsList from "./why-us/list";
import WorkWithUs from "./work-with-us";

const MainBody: FunctionComponent<Props> = ({ className }) => {
  const route = useRouter()

  const onSignUp = () => {
    route.push('/sign-up')
  }

  return (
    <div className={className}>
      <div className="body-image-container">
        <div className="body-cristal">
          <div className="text">
            <h1>THE BIGGEST LAW SITE TO CONNECT PERSONS WITH THE CORRECT LAWYER</h1>
            <span>Here are the best lawyers in each specialty in all languages around the world</span>
            <StyledButton white text="Create your Account" onClick={onSignUp} />
          </div>
        </div>
      </div>
      <div className="main-body">
        <WhyUsList />
        <Statistics />
        <WorkWithUs />
      </div>
    </div>
  )
}

export default MainBody

interface Props {
  className?: string;
}
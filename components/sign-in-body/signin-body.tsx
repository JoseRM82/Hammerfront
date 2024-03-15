import { FunctionComponent } from "react";

import FirstStep from './in-first-step';

const SignInBody: FunctionComponent<Props> = ({className}) => {

  return (
    <div className={className}>
      <FirstStep />
    </div>
  )
}

export default SignInBody

interface Props {
  className?: string;
}
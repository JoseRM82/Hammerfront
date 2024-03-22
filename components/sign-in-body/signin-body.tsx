import { FunctionComponent, useEffect, useState } from "react";

import FirstStep from './in-first-step';
import SignUpBody from "../sign-up-body";
import globalState from "../../state/global";
import { useAppSelector } from "../../state";

const SignInBody: FunctionComponent<Props> = ({className}) => {
  const {sign} = useAppSelector(state => state.globalState)
  const [selectedSign, setSelectedSign] = useState('SignUp')

  useEffect(() => {
    setSelectedSign(sign)
  }, [sign])

  return (
    <div className={className}>
      <FirstStep sign={selectedSign === 'SignIn' ? true : false} />
      <SignUpBody sign={selectedSign === 'SignUp' ? true : false} />
    </div>
  )
}

export default SignInBody

interface Props {
  className?: string;
}
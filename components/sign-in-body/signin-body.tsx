import { FunctionComponent, useEffect, useState } from "react";

import FirstStep from './in-first-step';
import SignUpBody from "../sign-up-body";
import { useAppSelector } from "../../state";

const SignInBody: FunctionComponent<Props> = ({className}) => {
  const {sign} = useAppSelector(state => state.globalState)
  const [selectedSign, setSelectedSign] = useState('SignUp')

  useEffect(() => {
    setSelectedSign(sign)
  }, [sign])

  return (
    <div className={className}>
      {selectedSign === 'SignIn' && <FirstStep  />}
      {selectedSign === 'SignUp' && <SignUpBody />}
    </div>
  )
}

export default SignInBody

interface Props {
  className?: string;
}
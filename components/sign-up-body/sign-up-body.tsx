import { FunctionComponent, useState } from "react";

import UpFirstStep from "./up-first-step";
import UpSecondStep from "./up-second-step";
import UpThirdStep from "./up-third-step";

const SignUpBody: FunctionComponent<Props> = ({ className }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [userType, setUserType] = useState('client')

  return (
    <div className={className}>
      {currentStep === 1 && <UpFirstStep setLawyer={() => setUserType('lawyer')} onNext={() => setCurrentStep(2)} />}
      {currentStep === 2 && <UpSecondStep lawyer={userType === 'lawyer'} onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />}
      {currentStep === 3 && <UpThirdStep lawyer={userType === 'lawyer'} onBack={() => setCurrentStep(2)} />}
    </div>
  )
}

export default SignUpBody

interface Props {
  className?: string;
  sign?: boolean;
}
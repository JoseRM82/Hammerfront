import Head from "next/head";
import { FunctionComponent } from "react";

import SignInBody from "../../components/sign-in-body";

const SignIn: FunctionComponent<Props> = ({className}) => {
  return (
    <div className={className}>
      <Head>
        <title>Hammer & Co. Sign In</title>
        <meta name="Hammer services page" />
      </Head>

      <div className="signin-glass"></div>
      <div className="signin-background">
          <SignInBody />
      </div>
    </div>
  )
}

export default SignIn

interface Props {
  className?: string;
}
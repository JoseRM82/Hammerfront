import Head from "next/head";
import { FunctionComponent } from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";
import SignUpBody from "../../components/sign-up-body";

const SignUp: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Head>
        <title>Hammer & Co. Sign In</title>
        <meta name="Hammer services page" />
      </Head>

      <Header header/>
      <SignUpBody />
      <Footer />
    </div>
  )
}

export default SignUp

interface Props {
  className: string;
}
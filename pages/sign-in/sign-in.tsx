import Head from "next/head";
import { FunctionComponent } from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";
import SignInBody from "../../components/sign-in-body";

const SignIn: FunctionComponent<Props> = ({className}) => {
  return (
    <div className={className}>
      <Head>
        <title>Hammer & Co. Sign In</title>
        <meta name="Hammer services page" />
      </Head>

      <Header header />
        <SignInBody />
      <Footer />
    </div>
  )
}

export default SignIn

interface Props {
  className?: string;
}
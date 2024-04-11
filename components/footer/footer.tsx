import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import facebook from './facebook.svg';
import twitter from './twitter.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';

const Footer: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="footer-filter">
        <div className="footer-disclaimer">
          Jose Matos in association with Hammer & co.
        </div>
        <div className="footer-social">
          {/* <Link href='https://www.facebook.com'><a target={"_blank"}><div className="social-link" ><Image src={facebook} height={30} width={30} /></div></a></Link>
          <Link href='https://www.twitter.com'><a target={"_blank"}><div className="social-link" ><Image src={twitter} height={30} width={30} /></div></a></Link> */}
          <Link href='https://github.com/JoseRM82/Hammerfront'><a target={"_blank"}><div className="social-link" ><Image src={github} height={30} width={30} /></div></a></Link>
          <Link href='https://www.linkedin.com/in/jos%C3%A9-matos-gonzales-8460572ba/'><a target={"_blank"}><div className="social-link" ><Image src={linkedin} height={30} width={30} /></div></a></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

interface Props {
  className?: string;
}

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import facebook from './facebook.svg';
import twitter from './twitter.svg';
import whatsapp from './whatsapp.svg';

const Footer: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="footer-filter">
        <div className="footer-disclaimer">
          All rights reserved for Hammer & Co. and their partners
        </div>
        <div className="footer-social">
          <Link href='https://www.facebook.com'><a target={"_blank"}><div className="social-link" ><Image src={facebook} height={40} width={40} /></div></a></Link>
          <Link href='https://www.twitter.com'><a target={"_blank"}><div className="social-link" ><Image src={twitter} height={40} width={40} /></div></a></Link>
          <Link href='https://web.whatsapp.com'><a target={"_blank"}><div className="social-link" ><Image src={whatsapp} height={40} width={40} /></div></a></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

interface Props {
  className?: string;
}

import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

const WhyUs: FunctionComponent<Props> = ({ className, description, image }) => {
  return (
    <div className={className}>
      <div className="card-container">
        <div className="img-container">
          <div className="social-link" ><Image src={image} height={100} width={100} /></div>
        </div>
        <div className="desc-container">
          <span className="description">{description}</span>
        </div>
      </div>
    </div>
  )
}

export default WhyUs

interface Props {
  className?: string;
  image: StaticImageData;
  id?: number;
  description: string;
}
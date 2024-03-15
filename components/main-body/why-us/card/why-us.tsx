import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

const WhyUs: FunctionComponent<Props> = ({ className, description, image }) => {
  return (
    <div className={className}>
      <div className="card-container">
        <div className="img-container">
          <Image src={image} height={220} width={260} objectFit='contain' />
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
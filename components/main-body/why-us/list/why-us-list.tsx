import { FunctionComponent } from "react";
import WhyUs from "../card";

import { StaticImageData } from "next/image";
import law1 from './law1.svg'
import law2 from './law2.svg'
import law3 from './law3.svg'

const dummyObject = [
  {
    'id': 1,
    'image': law1,
    'description': 'Our page stands out as the premier destination to find lawyers because we prioritize quality, expertise, and reliability. With a curated selection of top-tier professionals, we ensure you connect with the best in the industry. Our user-friendly platform streamlines your search, making it effortless to find the perfect match for your needs. Trust us to deliver excellence and make your hiring process seamless.'
  },
  {
    'id': 2,
    'image': law2,
    'description': 'You can believe in our page because we prioritize transparency, credibility, and user satisfaction. We meticulously vet professionals to ensure their qualifications meet industry standards. Our commitment to integrity means you can trust the information and services we provide. Count on us to connect you with a lawyer you can rely on.'
  },
  {
    'id': 3,
    'image': law3,
    'description': 'Hammer is invaluable because it centralizes a diverse range of skilled professionals tailored to your needs. With user-friendly features and comprehensive profiles, finding the right professional has never been easier. Rely on us to streamline your search and elevate your projects to new heights.'
  },
]

const dummyObject2 = [
  {
    'id': 1,
    'image': law1,
    'description': 'Our page stands out as the premier destination to find lawyers because we prioritize quality, expertise, and reliability.Trust us to deliver excellence and make your hiring process seamless.'
  },
  {
    'id': 2,
    'image': law2,
    'description': 'You can believe in our page because we prioritize transparency, credibility, and user satisfaction. We meticulously vet professionals to ensure their qualifications meet industry standards.'
  },
  {
    'id': 3,
    'image': law3,
    'description': 'Hammer is invaluable because it centralizes a diverse range of skilled professionals tailored to your needs. Rely on us to streamline your search and manage your projects eficiently.'
  },
]

const WhyUsList: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="content-container">
        <h1 className="list-title">Why Choose Us</h1>
        <div className="container">
          {dummyObject.map(x => (
            <WhyUs className="cards" key={x.id} description={x.description} image={x.image} />
          ))}
        </div>
        <div className="phone-container">
          {dummyObject2.map(x => (
            <WhyUs className="phone-cards" key={x.id} description={x.description} image={x.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyUsList

interface Props {
  className?: string;
  id?: number;
  img?: StaticImageData;
  description?: string;
}
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
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde ducimus molestiae perferendis, suscipit repellendus accusamus porro quos ab odit? Reprehenderit, id odit! Repellendus, repellat nam! Sint nobis quisquam magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam magnam architecto vitae praesentium voluptatibus ratione, tempora quisquam dicta dolorum beatae iure eius dolorem ipsum incidunt nemo. Inventore ullam dignissimos earum.'
  },
  {
    'id': 2,
    'image': law2,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde ducimus molestiae perferendis, suscipit repellendus accusamus porro quos ab odit? Reprehenderit, id odit! Repellendus, repellat nam! Sint nobis quisquam magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam magnam architecto vitae praesentium voluptatibus ratione, tempora quisquam dicta dolorum beatae iure eius dolorem ipsum incidunt nemo. Inventore ullam dignissimos earum.'
  },
  {
    'id': 3,
    'image': law3,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde ducimus molestiae perferendis, suscipit repellendus accusamus porro quos ab odit? Reprehenderit, id odit! Repellendus, repellat nam! Sint nobis quisquam magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam magnam architecto vitae praesentium voluptatibus ratione, tempora quisquam dicta dolorum beatae iure eius dolorem ipsum incidunt nemo. Inventore ullam dignissimos earum.'
  },
]

const dummyObject2 = [
  {
    'id': 1,
    'image': law1,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde ducimus molestiae perferendis, suscipit repellendus accusamus porro quos ab odit? Reprehenderit, id odit! Repellendus'
  },
  {
    'id': 2,
    'image': law2,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde ducimus molestiae perferendis, suscipit repellendus accusamus porro quos ab odit? Reprehenderit, id odit!'
  },
  {
    'id': 3,
    'image': law3,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde ducimus molestiae perferendis, suscipit repellendus accusamus'
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
import { FunctionComponent } from "react";
import WhyUs from "../card";

import { StaticImageData } from "next/image";
import books from './books.jpg';
import team from './team.jpg';
import world from './world.jpg';

const dummyObject = [
  {
    'id': 1,
    'image': books,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde ducimus molestiae perferendis, suscipit repellendus accusamus porro quos ab odit? Reprehenderit, id odit! Repellendus, repellat nam! Sint nobis quisquam magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam magnam architecto vitae praesentium voluptatibus ratione, tempora quisquam dicta dolorum beatae iure eius dolorem ipsum incidunt nemo. Inventore ullam dignissimos earum.'
  },
  {
    'id': 2,
    'image': world,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde ducimus molestiae perferendis, suscipit repellendus accusamus porro quos ab odit? Reprehenderit, id odit! Repellendus, repellat nam! Sint nobis quisquam magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam magnam architecto vitae praesentium voluptatibus ratione, tempora quisquam dicta dolorum beatae iure eius dolorem ipsum incidunt nemo. Inventore ullam dignissimos earum.'
  },
  {
    'id': 3,
    'image': team,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde ducimus molestiae perferendis, suscipit repellendus accusamus porro quos ab odit? Reprehenderit, id odit! Repellendus, repellat nam! Sint nobis quisquam magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam magnam architecto vitae praesentium voluptatibus ratione, tempora quisquam dicta dolorum beatae iure eius dolorem ipsum incidunt nemo. Inventore ullam dignissimos earum.'
  },
]

const WhyUsList: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="content-container">
        <h1 className="list-title">Why Choose Us</h1>
        {dummyObject.map(x => (
          <WhyUs className="cards" key={x.id} description={x.description} image={x.image} />
        ))}
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
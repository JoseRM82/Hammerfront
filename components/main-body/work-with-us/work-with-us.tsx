import Image from "next/image";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import StyledButton from "../../styled-button";
import working from './working.jpg';

const WorkWithUs: FunctionComponent<Props> = ({ className }) => {
  const route = useRouter()

  const onSignUp = () => {
    route.push('/sign-up')
  }

  return (
    <div className={className}>
      <div className="img-container">
        <Image src={working} width={460} height={500} objectFit='contain' />
      </div>
      <div className="text-container">
        <h1 className="work-title">Want to try another way to work?</h1>
        <div className="work-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt perspiciatis, recusandae a eligendi voluptas quasi totam sunt facilis. Nesciunt incidunt, impedit et tenetur quibusdam eum? Ducimus laboriosam eius ab.</div>
        <StyledButton text="Work with us" onClick={onSignUp} />
      </div>
    </div>
  )
}

export default WorkWithUs

interface Props {
  className?: string;
}
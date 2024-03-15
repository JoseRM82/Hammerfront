import Image, { StaticImageData } from 'next/image'
import { FunctionComponent } from 'react'
import { useAppSelector } from '../../../state'

import StyledButton from '../../styled-button'

const Card: FunctionComponent<Props> = ({ className, complete, name, photo, university, _id, specialty, onClick, age, experience, description, onCreateRequest }) => {
  const { currentRequest } = useAppSelector(state => state.globalState)

  return (
    <div className={className} id={_id + ''} onClick={onClick}>
      <div className='photo'>
        {/* <Image className='actual-photo' src={photo} alt={name} objectFit='cover' /> */}
        <div className='actual-photo' >{name}</div>
      </div>
      {complete
        ? (<div className='data'>
          <div className='data_box'>
            <div className='data_box-name'>{name}</div>
            {currentRequest
              ? <StyledButton className='data_box-btn' text='Request' onClick={(e) => { e.stopPropagation(); onCreateRequest?.() }} />
              : <div></div>
            }
          </div>
          <div className='data_specialty'><span className='data-valor'>Specialty branch: </span>{specialty}</div>
          <div className='data_university'><span className='data-valor'>Graduated at: </span>{university}</div>
          <div className='data_age'><span className='data-valor'>Age: </span>{age} years</div>
          <div className='data_experience'><span className='data-valor'>Experience time: </span>{experience}</div>
          <div className='data_description'>{description}</div>
        </div>)

        : (<div className='info'>
          <div className='info_name'>{name}</div>
          <div className='info_specialty'>{specialty}</div>
          <div className='info_university'>{university}</div>
        </div>)
      }
    </div>
  )
}

export default Card

interface Props {
  className?: string;
  _id?: number;
  name?: string;
  photo?: string | StaticImageData;
  age?: string;
  experience?: string;
  description?: string;
  university?: string;
  specialty?: string;
  onClick?: () => void;
  onCreateRequest?: () => void;
  complete?: boolean;
}

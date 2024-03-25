import Image, { StaticImageData } from 'next/image'
import { FunctionComponent, useState } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { useAppSelector } from '../../../state'
import StyledButton from '../../styled-button'

const Card: FunctionComponent<Props> = ({ className, complete, name, photo, university, _id, specialty, onClick, age, experience,languages, country, work_area, onCreateRequest, waiting }) => {
  const { currentRequest } = useAppSelector(state => state.globalState)
  const [spinning, setSpinning] = useState<boolean>(false)

  return (
    <div className={className} id={_id + ''} onClick={onClick}>
      <div className='photo'>
        {/* <Image className='current-photo' src={photo} alt={name} objectFit='cover' /> */}
        <div className='current-photo' >{name}</div>
      </div>
      {complete
        ? 
        <div className="complete-data">
          <div className='data'>
            <div className='professional-data'>{name}</div>
            <div className='professional-data'><span className='data-valor'>Specialty branch: </span>{specialty}</div>
            <div className='professional-data'><span className='data-valor'>Graduated from: </span>{university}</div>
            <div className='professional-data'><span className='data-valor'>{'Language(s): '}</span>{languages}</div>
          </div>
          <div className='data'>
            <div className='professional-data'><span className='data-valor'>Age: </span>{age} years</div>
            <div className='professional-data'><span className='data-valor'>Experience time: </span>{experience}</div>
            <div className='professional-data'><span className='data-valor'>Country: </span>{country}</div>
            <div className='professional-data'><span className='data-valor'>Work on: </span>{work_area}</div>
          </div>
        </div>
        : 
        (<div className='professional-info'>
          <div className='info'>{name}</div>
          <div className='info'>{`specialty: ${specialty}`}</div>
          <div className='info'>{`university: ${university}`}</div>
        </div>)
      }
      {(complete && currentRequest)
        ?
        <div className='request-btn'>
          <Spin size='large' spinning={spinning} indicator={<LoadingOutlined style={{color: '#fff'}}/>}>
            <StyledButton luxury text='Request' onClick={(e) => { e.stopPropagation(); setSpinning(true); onCreateRequest?.()}} />
          </Spin>
        </div>
        : <></>
      }
    </div>
  )
}

export default Card

interface Props {
  className?: string;
  _id?: string;
  name?: string;
  photo?: string | StaticImageData;
  age?: string;
  experience?: string;
  description?: string;
  university?: string;
  specialty?: string;
  languages?: string;
  country?: string;
  work_area?: string;
  onClick?: () => void;
  onCreateRequest?: () => void;
  complete?: boolean;
  waiting?: boolean;
}

import { FunctionComponent, useEffect, useState } from 'react'

import Card from '../card'
import { useAppSelector } from '../../../state'
import createRequest from '../../../services/requests/create-request'
import { useRouter } from 'next/router'

const ProfesionalsList: FunctionComponent<Props> = ({ className, loading }) => {
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [selectedId, setSelectedId] = useState('')
  const [lawyers, setLawyers] = useState<Lawyer[]>([])
  const { lawyersList } = useAppSelector(state => state.globalState)
  const { currentRequest } = useAppSelector(state => state.globalState)
  const router = useRouter()

  const onClick = (id: any) => {
    if (selectedId === id + '') {
      setSelectedId('')
    } else {
      setSelectedId(id + '')

    }
  }

  const onCreateRequest = (id: any) => {
    createRequest(currentRequest, id)
      .then(res => {
        if(!res.success) {
          setIsWaiting(false)
          window.alert('Something went wrong, please try again later')
          return 
        } 
        setIsWaiting(false)
        window.alert('Request sent successfully!')
        return
      }).catch(e => {console.error(e); setIsWaiting(false); window.alert('Something went wrong, please try again later')})
    router.push('/cases')
  }

  useEffect(() => {
    setLawyers(lawyersList)
  }, [lawyersList])

  useEffect(() => {
    const heightY = document.getElementById(selectedId)?.offsetTop
    const vheight = window.innerHeight / 2
    const divHeight = document.getElementById(selectedId)?.clientHeight! / 2
    if (heightY) {
      scrollTo(0, heightY! - vheight + divHeight!)
    }
  }, [selectedId])

  return (
    <div className={className}>
      <div className='professionals-title'>Our Professionals:</div>
      <div className='lawyers-list'>
        {lawyers.length > 0
          ? lawyers.map(x => (
            <Card className='lawyers-list-card' onClick={() => onClick(x._id)} waiting={isWaiting} onCreateRequest={() => {onCreateRequest(x._id); setIsWaiting(true)}} complete={selectedId === x._id} _id={x._id} key={x._id} age={x.data!.birthdate} country={x.data!.country} languages={x.data!.languages} work_area={x.data!.work_area} experience={x.data!.experience_time} name={`${x.last_name}, ${x.first_name}`} photo={x.data!.photo} university={x.data!.university} specialty={x.data!.specialty_branch} />
          ))
          :
          <div className="professionals-container">
            {loading ? <div className='professionals-loading' >Lawyers are Loading</div> : <div className='no-professionals'>There are no Lawyers yet</div>}
          </div> 
        }
      </div>
    </div>
  )
}

export default ProfesionalsList

interface Props {
  className?: string;
  loading?: boolean;
}

export interface Lawyer {
  _id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  user_type?: string;
  password?: string;
  data?: Data;
  token?: string,
}

export interface Data {
  identification?: string;
  university?: string;
  specialty_branch?: string;
  experience_time?: string;
  birthdate?: string;
  country?: string;
  city?: string;
  adress?: string;
  work_area?: string;
  zip_code?: string;
  languages?: string;
  phone_number?: string;
  photo?: string;
  description?: string;
}
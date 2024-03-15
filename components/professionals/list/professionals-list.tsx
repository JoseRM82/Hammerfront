import { FunctionComponent, useEffect, useState } from 'react'

import Card from '../card'
import { useAppSelector } from '../../../state'
import createRequest from '../../../services/requests/create-request'

const ProfesionalsList: FunctionComponent<Props> = ({ className }) => {
  const [selectedId, setSelectedId] = useState('')
  const { lawyersList } = useAppSelector(state => state.globalState)
  const { currentRequest } = useAppSelector(state => state.globalState)

  const onClick = (id: any) => {
    if (selectedId === id + '') {
      setSelectedId('')
    } else {
      setSelectedId(id + '')

    }
  }

  const onCreateRequest = (id: any) => {
    createRequest(currentRequest, id)
  }

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
      <div className='professionals-title' id='our-professionals'>Our Professionals:</div>
      <div className='lawyers-list'>
        {lawyersList.length > 0
          ? lawyersList.map(x => (
            <Card className='lawyers-list-card' onClick={() => onClick(x._id)} onCreateRequest={() => onCreateRequest(x._id)} complete={selectedId === x._id} _id={x._id} key={x._id} age={x.data.birthdate} description={x.data.description} experience={x.data.graduated_at} name={`${x.last_name}, ${x.first_name}`} photo={x.data.photo} university={x.data.university} specialty={x.data.specialty_branch} />
          ))
          : <div className='professionals-title' >Lawyers are Loading</div>
        }
      </div>
    </div>
  )
}

export default ProfesionalsList

interface Props {
  className?: string;
}

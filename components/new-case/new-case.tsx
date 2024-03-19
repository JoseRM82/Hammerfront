import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import createCase from '../../services/case/create-case'
import { useAppDispatch } from '../../state'
import StyledButton from '../styled-button'
import StyledLabelText from '../styled-label-text'
import globalState from '../../state/global'

const NewCase: FunctionComponent<Props> = ({ className }) => {
  const { register, handleSubmit } = useForm()
  const getValues = { register }
  const dispatch = useAppDispatch()
  const route = useRouter()

  const onCancel = () => {
    document.location.href = document.location.origin
  }

  const onAddCaseInformation = (body: any) => {
    createCase(body)
      .then((response) => {
        if (response.success) {
          const caseId = response.data._id
          dispatch(globalState.actions.setCurrentRequest(caseId))

          route.push('/our-professionals')
        }
      })
  }

  return (
    <div className={className}>
      <div className='NewCase-form'>
        <h1 className='NewCase-title'>Add your case info: </h1>
        <form className='NewCase' id='NewCase' onSubmit={handleSubmit(onAddCaseInformation)} >
          <div className='NewCase-container'>
            <StyledLabelText handleInput={getValues} text='Phone Number:' req name='phone_number' />
            <StyledLabelText handleInput={getValues} text='Email:' name='email' req type='email' />
            <StyledLabelText handleInput={getValues} text='City:' name='city' req />
            <StyledLabelText handleInput={getValues} text='State:' name='state' req />
            <StyledLabelText handleInput={getValues} text='Country:' name='country' req />
            <StyledLabelText handleInput={getValues} text='Adress:' name='adress' req />
            <StyledLabelText handleInput={getValues} text='Language(s):' name='languages' req />
            <StyledLabelText handleInput={getValues} text='Case Type: ' name='case_type' req />
          </div>
          <StyledLabelText handleInput={getValues} text='Case description:' name='description' description />
        </form>
      </div>
      <div className='btns'>
        <StyledButton text='Cancel' white onClick={onCancel} />
        <StyledButton text='Find a Lawyer' form='NewCase' />
      </div>
    </div>
  )
}

export default NewCase

interface Props {
  className?: string;
}

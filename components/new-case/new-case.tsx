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
            <StyledLabelText handleInput={getValues} placeHolder='Your phone number' name='phone_number' req />
            <StyledLabelText handleInput={getValues} placeHolder='Your email' name='email' req type='email' />
            <StyledLabelText handleInput={getValues} placeHolder='Lawsuit city' name='city' req />
            <StyledLabelText handleInput={getValues} placeHolder='Lawsuit state' name='state' req />
            <StyledLabelText handleInput={getValues} placeHolder='Lawsuit country' name='country' req />
            <StyledLabelText handleInput={getValues} placeHolder='Your adress' name='adress' req />
            <StyledLabelText handleInput={getValues} placeHolder='Language(s) you speak' name='languages' req />
            <StyledLabelText handleInput={getValues} placeHolder='Case Type' name='case_type' req />
          </div>
          <StyledLabelText handleInput={getValues} placeHolder='Case description' name='description' description />
        </form>
      </div>
      <div className='btns'>
        <StyledButton luxury text='Cancel' onClick={onCancel} />
        <StyledButton luxury text='Find a Lawyer' form='NewCase' />
      </div>
    </div>
  )
}

export default NewCase

interface Props {
  className?: string;
}

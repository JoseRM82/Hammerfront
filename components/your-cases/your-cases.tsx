import { FunctionComponent, useState } from "react";

import CasesContent from "./cases-content";

const YourCases: FunctionComponent<Props> = ({ className }) => {
  const [optionToggled, setOptionToggled] = useState('Current Cases')
  const [listToggled, setListToggled] = useState('')

  return (
    <div className={className}>
      <div className='case_option'>
        <div className={`case_option-list ${listToggled === 'Current Cases' ? 'clicked-list' : ''}`} onClick={() => {listToggled === 'Current Cases' ? setListToggled('') : setListToggled('Current Cases')}}>Current cases</div>
        <div className={`case-options ${listToggled === 'Current Cases' ? '' : 'hide-list'}`}>
          <div className={`case_option-item ${optionToggled === 'Current Cases' ? 'clicked-item' : ''} ${listToggled === 'Current Cases' ? '' : 'hide'}`} onClick={() => setOptionToggled('Current Cases')}>Current</div>
          <div className={`case_option-item ${optionToggled === 'Calendar' ? 'clicked-item' : ''} ${listToggled === 'Current Cases' ? '' : 'hide'}`} onClick={() => setOptionToggled('Calendar')}>Calendar</div>
          <div className={`case_option-item ${optionToggled === 'Requests' ? 'clicked-item' : ''} ${listToggled === 'Current Cases' ? '' : 'hide'}`} onClick={() => setOptionToggled('Requests')}>Requests</div>
        </div>
        <div className={`case_option-list ${listToggled === 'Past Cases' ? 'clicked-list' : ''}`} onClick={() => {listToggled === 'Past Cases' ? setListToggled('') : setListToggled('Past Cases')}}>Past cases</div>
          <div className={`case-options ${listToggled === 'Past Cases' ? '' : 'hide-list'}`}>
            <div className={`case_option-item ${optionToggled === 'Past Cases' ? 'clicked-item' : ''} ${listToggled === 'Past Cases' ? '' : 'hide'}`} onClick={() => setOptionToggled('Past Cases')}>Record</div>
          </div>
      </div>
      <CasesContent optionToggled={optionToggled} />
    </div>
  )
}

export default YourCases

interface Props {
  className?: string;
}
import { FunctionComponent, useState } from "react";

import CasesContent from "./cases-content";

const YourCases: FunctionComponent<Props> = ({ className }) => {
  const [optionToggled, setOptionToggled] = useState('Calendar')

  return (
    <div className={className}>
      <div className='case_option'>
        <div className="case_option-navbar">
          <div className="case_option-list">Current cases</div>
          <div className={`case_option-item ${optionToggled === 'Calendar' ? 'clicked' : ''}`} onClick={() => setOptionToggled('Calendar')}>Calendar</div>
          <div className={`case_option-item ${optionToggled === 'Current Cases' ? 'clicked' : ''}`} onClick={() => setOptionToggled('Current Cases')}>List</div>
          <div className={`case_option-item ${optionToggled === 'Requests' ? 'clicked' : ''}`} onClick={() => setOptionToggled('Requests')}>Requests</div>
        </div>
        <div className="case_option-navbar">
          <div className="case_option-list">Past cases</div>
          <div className={`case_option-item ${optionToggled === 'Past Cases' ? 'clicked' : ''}`} onClick={() => setOptionToggled('Past Cases')}>Record</div>
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
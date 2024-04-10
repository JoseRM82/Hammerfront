import { FunctionComponent, MutableRefObject, useEffect, useState } from "react";

import CasesContent from "./cases-content";
import guideState from "../../state/guide"
import { useAppDispatch, useAppSelector } from "../../state";

const YourCases: FunctionComponent<Props> = ({ className, tourRef }) => {
  const {guideCalendarOpen, guidePastOpen, guideRequestsOpen, guideCurrentOpen} = useAppSelector(state => state.guideState)
  const [optionToggled, setOptionToggled] = useState('Current Cases')
  const [listToggled, setListToggled] = useState('Current Cases')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(guideState.actions.setGuideCurrentOpen(optionToggled === 'Current Cases' ? true : false))
    dispatch(guideState.actions.setGuideCalendarOpen(optionToggled === 'Calendar' ? true : false))
    dispatch(guideState.actions.setGuideRequestsOpen(optionToggled === 'Requests' ? true : false))
    dispatch(guideState.actions.setGuidePastOpen(optionToggled === 'Past Cases' ? true : false))
  }, [optionToggled])

  return (
    <div className={className}>
      <div className='case_option' ref={tourRef!.tabsStep}>
        <div className={`case_option-mobile-item ${guideCurrentOpen ? 'clicked-mobile-item' : ''}`} onClick={() => setOptionToggled('Current Cases')}>Current</div>
        <div className={`case_option-mobile-item ${guideCalendarOpen ? 'clicked-mobile-item' : ''}`} onClick={() => setOptionToggled('Calendar')}>Calendar</div>
        <div className={`case_option-mobile-item ${guideRequestsOpen ? 'clicked-mobile-item' : ''}`} onClick={() => setOptionToggled('Requests')}>Requests</div>
        <div className={`case_option-mobile-item ${guidePastOpen ? 'clicked-mobile-item' : ''}`} onClick={() => setOptionToggled('Past Cases')}>Record</div>
        
        <div className={`case_option-item ${guideCurrentOpen ? 'clicked-item' : ''} ${listToggled === 'Current Cases' ? '' : 'hide'}`} onClick={() => setOptionToggled('Current Cases')}>Current</div>
        <div className={`case_option-item ${guideCalendarOpen ? 'clicked-item' : ''} ${listToggled === 'Current Cases' ? '' : 'hide'}`} onClick={() => setOptionToggled('Calendar')}>Calendar</div>
        <div className={`case_option-item ${guideRequestsOpen ? 'clicked-item' : ''} ${listToggled === 'Current Cases' ? '' : 'hide'}`} onClick={() => setOptionToggled('Requests')}>Requests</div>
        <div className={`case_option-item ${guidePastOpen ? 'clicked-item' : ''} ${listToggled === 'Past Cases' ? '' : 'hide'}`} onClick={() => setOptionToggled('Past Cases')}>Record</div>
      </div>
      <CasesContent optionToggled={optionToggled} tourRef={tourRef} />
    </div>
  )
}

export default YourCases

interface Props {
  className?: string;
  tourRef?: Record<string, MutableRefObject<any>>;
}
import { FunctionComponent, MutableRefObject, useState } from "react";
import CurrentCases from "./current-cases";
import Calendar from "./calendar";
import PastCases from "./past-cases";
import Requests from "./requests";
import { useAppSelector } from "../../../state";

const CasesContent: FunctionComponent<Props> = ({ className, optionToggled, tourRef }) => {
    const {guideCalendarOpen, guidePastOpen, guideRequestsOpen, guideCurrentOpen} = useAppSelector(state => state.guideState)

    return (
        <div className={className}>
            <div className="cases-title">{`Your Cases `}{optionToggled && <div className="cases-title">{' > '}{optionToggled}</div>}</div>
            <div className="cases-content">
                {(guideCurrentOpen) && <CurrentCases tourRef={tourRef}/>}
                {(guideCalendarOpen) && <Calendar tourRef={tourRef}/>}
                {(guideRequestsOpen) && <Requests tourRef={tourRef}/>}
                {(guidePastOpen) && <PastCases tourRef={tourRef}/>}
            </div>
        </div>
    )
}

export default CasesContent

interface Props {
    className?: string;
    optionToggled?: string;
    tourRef?: Record<string, MutableRefObject<any>>;
}
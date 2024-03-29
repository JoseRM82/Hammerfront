import { FunctionComponent, useState } from "react";
import CurrentCases from "./current-cases";
import Calendar from "./calendar";
import PastCases from "./past-cases";
import Requests from "./requests";

const CasesContent: FunctionComponent<Props> = ({ className, optionToggled }) => {
    return (
        <div className={className}>
            <div className="cases-title">{'Your Cases '}{optionToggled && <div className="cases-title">{' > '}{optionToggled}</div>}</div>
            <div className="cases-content">
                {optionToggled === 'Calendar' && <Calendar />}
                {optionToggled === 'Current Cases' && <CurrentCases />}
                {optionToggled === 'Requests' && <Requests />}
                {optionToggled === 'Past Cases' && <PastCases />}
            </div>
        </div>
    )
}

export default CasesContent

interface Props {
    className?: string;
    optionToggled?: string;
}
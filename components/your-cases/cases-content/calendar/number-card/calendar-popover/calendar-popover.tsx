import { FunctionComponent } from "react";

const CalendarPopover: FunctionComponent<Props> = ({className}) => {
  return (
    <div className={className}>
      <div className=""></div>
    </div>
  )
}

interface Props {
  className?: string;
}

export default CalendarPopover
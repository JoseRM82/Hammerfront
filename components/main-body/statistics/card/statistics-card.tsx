import { FunctionComponent } from "react";

const StatisticCard: FunctionComponent<Props> = ({className, _id, description, value}) => {
  return (
    <div className={className}>
      <div className="statistic-desc">{description}</div>
      <div className="statistic-value">{value}</div>
    </div>
  )
}

export default StatisticCard

interface Props {
  className?: string;
  _id?: number;
  description: string;
  value: string;
}
import { FunctionComponent } from "react";
import StatisticCard from "../card";

const dummyStats = [
  {
    'id': 1,
    'description': 'Cases solved',
    'value': '1 489',
  },
  {
    'id': 2,
    'description': 'Profits',
    'value': 'USD 18.6M',
  },
  {
    'id': 3,
    'description': 'Countries where our lawyers work',
    'value': '17',
  },
  {
    'id': 4,
    'description': 'Successful defenses',
    'value': '95%',
  },
]

const dummyStats2 = [
  {
    'id': 1,
    'description': 'Cases solved',
    'value': '1 489',
  },
  {
    'id': 2,
    'description': 'Profits',
    'value': 'USD 18.6M',
  },
]

const Statistics: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="stats">
        <div className="stats-container">
          <div className="stats-text">Choosing our page is a profitable decision for several reasons. We connect you with high-caliber lawyers to deliver quality results. Our efficient matching process saves you time and reduces overhead costs associated with hiring. With access to top talent, your cases are completed faster and safer. Try our platform to optimize your cases development.</div>
          <div className="stats-mobile-text">Choosing our page is a profitable decision for several reasons. With access to top talent, your cases are completed faster and safer. Try our platform to optimize your cases development.</div>
          <div className="stats-data">
            {dummyStats.map(x => (
              <StatisticCard className="stats-data-item" key={x.id} description={x.description} value={x.value} />
            ))}
            {dummyStats2.map(x => (
              <StatisticCard className="stats-data-mobile-item" key={x.id} description={x.description} value={x.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics

interface Props {
  className?: string;
}
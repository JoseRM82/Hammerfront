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

const Statistics: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="stats">
        <div className="stats-container">
          <div className="stats-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam tempore, at, fugiat ipsa recusandae eligendi earum corrupti est, ipsum quia alias labore repudiandae voluptatibus laborum iusto. Eius culpa nemo assumenda.</div>
          <div className="stats-data">
            {dummyStats.map(x => (
              <StatisticCard className="stats-data-item" key={x.id} description={x.description} value={x.value} />
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
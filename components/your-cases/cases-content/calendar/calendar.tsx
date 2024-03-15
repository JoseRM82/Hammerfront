import { FunctionComponent, useEffect, useState } from "react";
import dayjs from 'dayjs';
import NumberCard from "./number-card";
import { useDate } from "../../../../hooks/useCalendar/useDate/useDate";
import { useCalendar } from "../../../../hooks/useCalendar/useCalendar";
dayjs().format()

const Calendar: FunctionComponent<Props> = ({ className }) => {
  const [days, setDays] = useState<{ totalDays: number, firstDay: number }>({ totalDays: dayjs().endOf('month').get('date'), firstDay: dayjs().startOf('month').get('day') })
  const [calendar, setCalendar] = useState<{ id: string, number: string }[]>(useCalendar(days.totalDays, days.firstDay))
  const [currentMonth, setCurrentMonth] = useState<number>(dayjs().get('month') + 1)
  const [currentYear, setCurrentYear] = useState<number>(dayjs().get('year'))


  const onClickNext = () => {
    if (currentMonth === 12) {
      setCurrentYear(currentYear + 1)
      setCurrentMonth(1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const onClickPrev = () => {
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1)
      setCurrentMonth(12)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  useEffect(() => {
    const res = useDate(currentMonth, currentYear)!
    setDays(res)
    setCalendar(useCalendar(res.totalDays, res.firstDay)!)
  }, [currentMonth])

  const isOccupied = false

  return (
    <div className={className}>
      <div className="calendar-date">
        <div className="calendar-prev" onClick={onClickPrev}>{'<'}</div>
        <div className="calendar-now">{dayjs(`${currentYear}-${currentMonth}`).format('MMMM')} {dayjs(`${currentYear}-${currentMonth}`).format('YYYY')}</div>
        <div className="calendar-next" onClick={onClickNext}>{'>'}</div>
      </div>
      <div className="calendar-month">
        <div className="calendar-weekday sun">Sun</div>
        <div className="calendar-weekday">Mon</div>
        <div className="calendar-weekday">Tue</div>
        <div className="calendar-weekday">Wed</div>
        <div className="calendar-weekday">Thu</div>
        <div className="calendar-weekday">Fri</div>
        <div className="calendar-weekday">Sat</div>
      </div>
      <div className="calendar-month">
        {calendar.map(x => (
          <NumberCard className={(dayjs().format('YYYY-M-D') === `${currentYear}-${currentMonth}-${x.number}`) ? `today-font ${isOccupied ? 'occupied-soon' : 'today-back'}` : isOccupied ? `occupied-soon ${Number.isInteger(+x.id / 7) ? 'sun' : ''}` : Number.isInteger(+x.id / 7) ? 'sun' : ''}
            key={x.id} number={x.number} />
        ))}
      </div>
    </div>
  )
}

export default Calendar

interface Props {
  className?: string;
}
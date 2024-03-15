import { FunctionComponent, useEffect, useState } from "react";
import dayjs from 'dayjs';

import NumberCard from "./number-card";
import { monthInfo } from "../../../../hooks/useCalendar/useDate/useDate";
import { createCalendar } from "../../../../hooks/useCalendar/useCalendar";
dayjs().format()

const Calendar: FunctionComponent<Props> = ({ className }) => {
  const [days, setDays] = useState<{ totalDays: number, firstDay: number }>({ totalDays: dayjs().endOf('month').get('date'), firstDay: dayjs().startOf('month').get('day') })
  const [calendar, setCalendar] = useState<{ id: string, number: string }[]>(createCalendar(days.totalDays, days.firstDay))
  const [viewedMonth, setViewedMonth] = useState<number>(dayjs().get('month') + 1)
  const [viewedYear, setViewedYear] = useState<number>(dayjs().get('year'))
  const [backButton, setBackButton] = useState(false)
  // const [selectedDate, setSelectedDate] = useState('')


  const onClickNext = () => {
    if (viewedMonth === 12) {
      setViewedYear(viewedYear + 1)
      setViewedMonth(1)
    } else {
      setViewedMonth(viewedMonth + 1)
    }
  }

  const onClickPrev = () => {
    if (viewedMonth === 1) {
      setViewedYear(viewedYear - 1)
      setViewedMonth(12)
    } else {
      setViewedMonth(viewedMonth - 1)
    }
  }

  const onClickBack = () => {
    setViewedMonth(dayjs().get('month') + 1)
    setViewedYear(dayjs().get('year'))
  }

  // const onClickDay = (number: number) => {
    
  // }

  useEffect(() => {
    const res = monthInfo(viewedMonth, viewedYear)!
    setDays(res)
    setCalendar(createCalendar(res.totalDays, res.firstDay)!)
    const isThisMonth = (dayjs().format('YYYY-M') === `${viewedYear}-${viewedMonth}`)
    setBackButton(!isThisMonth)
  }, [viewedMonth])

  const isOccupied = false

  return (
    <div className={className}> 
      <div className="calendar-date">
        <div className="calendar-prev" onClick={onClickPrev}>{'<'}</div>
        <div className="calendar-now">{dayjs(`${viewedYear}-${viewedMonth}`).format('MMMM')} {dayjs(`${viewedYear}-${viewedMonth}`).format('YYYY')}</div>
        {backButton && <div className="calendar-back" onClick={onClickBack}>Back</div>}
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
          <NumberCard className={(dayjs().format('YYYY-M-D') === `${viewedYear}-${viewedMonth}-${x.number}`) ? `today-font ${isOccupied ? 'occupied-soon' : 'today-back'}` : isOccupied ? `occupied-soon ${Number.isInteger(+x.id / 7) ? 'sun' : ''}` : Number.isInteger(+x.id / 7) ? 'sun' : ''}
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
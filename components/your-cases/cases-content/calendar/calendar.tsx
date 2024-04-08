import { FunctionComponent, MutableRefObject, useEffect, useState } from "react";
import dayjs from 'dayjs';

import NumberCard from "./number-card";
import { monthInfo } from "../../../../hooks/useCalendar/useDate/useDate";
import { createCalendar } from "../../../../hooks/useCalendar/useCalendar";
import { getNotes } from "../../../../services/calendar/get-dates";
import { USER_ID } from "../../../../shared/constants/local";
import calendarState from "../../../../state/calendar"
import { useAppDispatch, useAppSelector } from "../../../../state";
import { dateFormatter } from "../../../../hooks/get-formatted-date";
dayjs().format()

const Calendar: FunctionComponent<Props> = ({ className, tourRef }) => {
  const {guideAvailable} = useAppSelector(state => state.guideState)
  const {calendar_information} = useAppSelector(state => state.calendarState)
  const [days, setDays] = useState<{ totalDays: number, firstDay: number }>({ totalDays: dayjs().endOf('month').get('date'), firstDay: dayjs().startOf('month').get('day') })
  const [calendar, setCalendar] = useState<{ id: string, number: string }[]>(createCalendar(days.totalDays, days.firstDay))
  const [viewedMonth, setViewedMonth] = useState<number>(dayjs().get('month') + 1)
  const [viewedYear, setViewedYear] = useState<number>(dayjs().get('year'))
  const [backButton, setBackButton] = useState(false)
  const dispatch = useAppDispatch()
  let own_id: string

  if(typeof window !== 'undefined'){
    own_id = window.localStorage.getItem(USER_ID)!
  }


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

  const onGetNotes = () => {
    let calendar_info = JSON.parse(JSON.stringify(calendar_information))

    getNotes(own_id)
      .then(res => {
        if(!res.success) return 

        const response = res.data
        
        for(let i = 0; i < res.data.length; ) {

          if(calendar_info[response[i].date] === undefined) {
            
            const newDate = {[response[i].date]: {
              notes: [{note: response[i].note}],
              citations: []
            }}

            calendar_info = {...calendar_info, ...newDate}
            i++
            
          } else if(calendar_info[response[i].date]) {
            
            if(calendar_info[response[i].date].notes.indexOf({note: response[i].note}) < 0) {
              
              const newNote = {[response[i].date]: {
                notes: [...calendar_info[response[i].date].notes, {note: response[i].note}],
                citations: [...calendar_info[response[i].date].citations]
              }}
              
              calendar_info = {...calendar_info, ...newNote}
              i++
              
            } else {
              i++
            }
          }
        }
        dispatch(calendarState.actions.setCalendarInfo(calendar_info))
      }).catch(error => console.error(error))
    return 
  }

  useEffect(() => {
    onGetNotes()
  }, [])

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
      <div className="calendar-month" ref={tourRef?.calendarStep}>
        {calendar.map(x => (
          <NumberCard className={(dayjs().format('YYYY-M-D') === `${viewedYear}-${viewedMonth}-${x.number}`) ? `today-font ${isOccupied ? 'occupied-soon' : 'today-back'}` : isOccupied ? `occupied-soon ${Number.isInteger(+x.id / 7) ? 'sun' : ''}` : Number.isInteger(+x.id / 7) ? 'sun' : ''}
            key={x.id} number={x.number} today={`${viewedYear}-${dayjs(dateFormatter(viewedMonth)).format('MMM')}-${dateFormatter(x.number)}`} />
        ))}
      </div>
    </div>
  )
}

export default Calendar

interface Props {
  className?: string;
  tourRef?: Record<string, MutableRefObject<any>>;
}
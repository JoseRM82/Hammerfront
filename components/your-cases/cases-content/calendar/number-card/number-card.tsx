import { FunctionComponent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Popover } from "antd";

import calendarState from "../../../../../state/calendar";
import { useAppDispatch, useAppSelector } from "../../../../../state";
import StyledLabelText from "../../../../styled-label-text";
import StyledButton from "../../../../styled-button";
import { USER_ID } from "../../../../../shared/constants/local";
import postNote from "../../../../../services/calendar/post-note";
import deleteNote from "../../../../../services/calendar/delete-note";

const NumberCard: FunctionComponent<Props> = ({ className, number, today }) => {
    const {calendar_information} = useAppSelector(state => state.calendarState)
    const [input, setInput] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()
    let own_id: string

    if(typeof window !== 'undefined'){
        own_id = window.localStorage.getItem(USER_ID)!
    }

    const handleOpenChange = (newOpen: boolean) => {
        setInput(false)
        setOpen(newOpen);
    };

    const setNote = (value: string, date: string) => {
        if(!value) return

        postNote(value, date, own_id)
            .then(res => {
                if(!res.success) return

                if(calendar_information[today] === undefined) {
                    const newDate = {[today]: {
                      notes: [{note: value}],
                      citations: []
                    }}
                    return dispatch(calendarState.actions.setCalendarInfo({...calendar_information, ...newDate}))
                  } else if(Boolean(calendar_information[today])) {
                    const newNote = {[today]: {
                      notes: [...calendar_information[today].notes, {note: value}],
                      citations: [...calendar_information[today].citations]
                    }}
                    return dispatch(calendarState.actions.setCalendarInfo({...calendar_information, ...newNote}))
                  }
            })
    }

    const removeNote = (thisNote: string) => {
        deleteNote(thisNote, own_id)
            .then(res => {
                if(!res.success) return
                let newCalendarInfo = JSON.parse(JSON.stringify(calendar_information))
                // let noteToDelete 

                // newCalendarInfo[today].notes.splice(newCalendarInfo[today].notes.indexOf(noteToDelete), 1)
                const newNotes = calendar_information[today].notes.filter((noteToDelete) => noteToDelete.note !== thisNote)

                newCalendarInfo[today].notes = newNotes

                dispatch(calendarState.actions.setCalendarInfo(newCalendarInfo))
            })
    }

    const content = (
        <div className={`${className} notes-citations`}>
            {calendar_information[today] &&
            calendar_information[today].citations.map(citation => (
                <div className="citations" key={uuidv4()}>{citation.citation}</div>
            ))
            }
            {calendar_information[today] &&
            calendar_information[today].notes.map(note => (
                <div className="notes-container" key={uuidv4()}>
                    <div className="note">{note.note}</div>
                    <div className="delete" onClick={() => removeNote(note.note)}>x</div>
                </div>
            ))
            }
            {input && 
                <form className="note-form" onSubmit={e => e.preventDefault()}>
                    <StyledLabelText small value={value} onChange={e => setValue(e.target.value)} name='note' text='' autof type='text' />
                    <div className="note-send" onClick={() => setNote(value, today)}>send</div>
                </form>
            }
            <div className="new-citation" onClick={() => setInput(!input)}>+ add a new note</div>
        </div>
    )
        
    return (
        number 
        ? 
        <Popover color="#24343f" trigger='click' open={open} onOpenChange={handleOpenChange} content={content}>
            <div className={className}>
                {number}
            </div>
        </Popover>
        :
        <div className={className}></div>
    )
}

export default NumberCard

interface Props {
    className?: string;
    number?: string;
    today: string;
}
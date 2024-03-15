export const useCalendar = (totalDays: number, firstDay: number) => {
    let number = 0
    let calendar: { id: string, number: string }[] = []
    const max = Math.ceil((totalDays + firstDay) / 7) * 7

    for (let i = 0; i < max; i++) {
        if (number > 0) {
            if (number >= totalDays) {
                calendar.push({ 'id': i + '', 'number': '' })
            } else {
                calendar.push({ 'id': i + '', 'number': (number + 1) + '' })
                number++
            }
        } else if (i !== firstDay) {
            calendar.push({ 'id': i + '', 'number': '' })
        } else if (i === firstDay) {
            calendar.push({ 'id': i + '', 'number': (number + 1) + '' })
            number++
        }
    }

    return calendar
}
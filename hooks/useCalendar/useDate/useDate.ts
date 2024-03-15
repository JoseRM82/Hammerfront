import dayjs from 'dayjs';
dayjs().format()

export const useDate = (month: number, year: number) => {
    const totalDays = dayjs(`${year}-${month}`).endOf('month').get('date')
    const firstDay = dayjs(`${year}-${month}`).get('day')

    return { totalDays, firstDay }
}
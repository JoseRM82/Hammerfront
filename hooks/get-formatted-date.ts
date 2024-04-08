export const dateFormatter = (number: number | string) => {
  if(Number(number) < 10) {
    return `0${number}`
  }

  return number
}
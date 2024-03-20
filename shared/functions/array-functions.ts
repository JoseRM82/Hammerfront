export const isAnElementInArray = (arr: any[], elem: any): boolean => {
  arr.forEach(x => {
    if(x === elem) {
      return true
    }
  })
  return false
}
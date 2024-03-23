export const isAnElementInArray = (arr: any[], elem: any): boolean => {
  arr.forEach(x => {
    if(x === elem) {
      return true
    }
  })
  return false
}

export const divideArray = (arr: any[], elem: any) => {
  if(arr.indexOf(elem) === 0) {
    const arr1: any[] = []
    const arr2: any[] = arr.splice(1, arr.length - 1)
    console.log('arr1: ', arr1)
    console.log('arr2: ', arr2)
    console.log('elem: ', elem)
    
    const res: Record<string, any> = {arr1: arr1, elem: elem, arr2: arr2}
    console.log('res: ', res)
    
    return res
    
  } else if(arr.indexOf(elem) === arr.length - 1) {
    const arr1: any[] = arr.splice(0, arr.length - 1)
    const arr2: any[] = []
    console.log('arr1: ', arr1)
    console.log('arr2: ', arr2)
    console.log('elem: ', elem)
    
    const res: Record<string, any> = {arr1: arr1, elem: elem, arr2: arr2}
    console.log('res: ', res)
    
    return res
    
  } else {
    const arr1: any[] = arr.splice(0, arr.indexOf(elem))
    const arr2: any[] = arr.splice(1, arr.length - 1)
    console.log('arr1: ', arr1)
    console.log('arr2: ', arr2)
    console.log('elem: ', elem)
    
    const res: Record<string, any> = {arr1: arr1, elem: elem, arr2: arr2}
    console.log('res: ', res)

    return res
  }
}
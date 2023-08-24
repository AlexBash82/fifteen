export const reAssign = (arrowChips) => {
  const indexSpace = arrowChips.indexOf(16)
  let arrowActive = []
  switch (indexSpace) {
    case 0:
      arrowActive = [1, 4]
      break
    case 1:
      arrowActive = [0, 2, 5]
      break
    case 2:
      arrowActive = [1, 3, 6]
      break
    case 3:
      arrowActive = [2, 7]
      break
    case 4:
      arrowActive = [0, 5, 8]
      break
    case 5:
      arrowActive = [1, 4, 6, 9]
      break
    case 6:
      arrowActive = [2, 5, 7, 10]
      break
    case 7:
      arrowActive = [3, 6, 11]
      break
    case 8:
      arrowActive = [4, 9, 12]
      break
    case 9:
      arrowActive = [5, 8, 10, 13]
      break
    case 10:
      arrowActive = [6, 9, 11, 14]
      break
    case 11:
      arrowActive = [7, 10, 15]
      break
    case 12:
      arrowActive = [8, 13]
      break
    case 13:
      arrowActive = [9, 12, 14]
      break
    case 14:
      arrowActive = [10, 13, 15]
      break
    case 15:
      arrowActive = [11, 14]
      break
    default:
      console.log('iSpace is not found')
      break
  }

  const result = arrowChips.filter((item, index) => --item === index)
  let complete
  if (result.length === 16) {
    complete = true
  } else {
    complete = false
  }

  return [arrowActive, indexSpace, complete]
}

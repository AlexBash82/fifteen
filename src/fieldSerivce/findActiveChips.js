export const findActiveChips = (arrayChips) => {
  const indexSpace = arrayChips.indexOf(16)
  let arrayActive = []
  switch (indexSpace) {
    case 0:
      arrayActive = [1, 4]
      break
    case 1:
      arrayActive = [0, 2, 5]
      break
    case 2:
      arrayActive = [1, 3, 6]
      break
    case 3:
      arrayActive = [2, 7]
      break
    case 4:
      arrayActive = [0, 5, 8]
      break
    case 5:
      arrayActive = [1, 4, 6, 9]
      break
    case 6:
      arrayActive = [2, 5, 7, 10]
      break
    case 7:
      arrayActive = [3, 6, 11]
      break
    case 8:
      arrayActive = [4, 9, 12]
      break
    case 9:
      arrayActive = [5, 8, 10, 13]
      break
    case 10:
      arrayActive = [6, 9, 11, 14]
      break
    case 11:
      arrayActive = [7, 10, 15]
      break
    case 12:
      arrayActive = [8, 13]
      break
    case 13:
      arrayActive = [9, 12, 14]
      break
    case 14:
      arrayActive = [10, 13, 15]
      break
    case 15:
      arrayActive = [11, 14]
      break
    default:
      console.log('iSpace is not found')
      break
  }

  const result = arrayChips.filter((item, index) => --item === index)
  let completed
  if (result.length === 16) {
    completed = true
  } else {
    completed = false
  }

  return [arrayActive, indexSpace, completed]
}

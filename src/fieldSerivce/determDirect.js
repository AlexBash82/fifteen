export const determDirect = (order, iSpace) => {
  let direction = ''
  switch (iSpace) {
    case 0:
      direction = order === 1 ? 'hover-left' : 'hover-up'
      break
    case 1:
      direction =
        order === 0 ? 'hover-right' : order === 2 ? 'hover-left' : 'hover-up'
      break
    case 2:
      direction =
        order === 1 ? 'hover-right' : order === 3 ? 'hover-left' : 'hover-up'
      break
    case 3:
      direction = order === 2 ? 'hover-right' : 'hover-up'
      break
    case 4:
      direction =
        order === 0 ? 'hover-down' : order === 5 ? 'hover-left' : 'hover-up'
      break
    case 5:
      direction =
        order === 1
          ? 'hover-down'
          : order === 4
          ? 'hover-right'
          : order === 6
          ? 'hover-left'
          : 'hover-up'
      break
    case 6:
      direction =
        order === 2
          ? 'hover-down'
          : order === 5
          ? 'hover-right'
          : order === 7
          ? 'hover-left'
          : 'hover-up'
      break
    case 7:
      direction =
        order === 3 ? 'hover-down' : order === 6 ? 'hover-right' : 'hover-up'
      break
    case 8:
      direction =
        order === 4 ? 'hover-down' : order === 9 ? 'hover-left' : 'hover-up'
      break
    case 9:
      direction =
        order === 5
          ? 'hover-down'
          : order === 8
          ? 'hover-right'
          : order === 10
          ? 'hover-left'
          : 'hover-up'
      break
    case 10:
      direction =
        order === 6
          ? 'hover-down'
          : order === 9
          ? 'hover-right'
          : order === 11
          ? 'hover-left'
          : 'hover-up'
      break
    case 11:
      direction =
        order === 7 ? 'hover-down' : order === 10 ? 'hover-right' : 'hover-up'
      break
    case 12:
      direction = order === 8 ? 'hover-down' : 'hover-left'
      break
    case 13:
      direction =
        order === 9 ? 'hover-down' : order === 12 ? 'hover-right' : 'hover-left'
      break
    case 14:
      direction =
        order === 10
          ? 'hover-down'
          : order === 13
          ? 'hover-right'
          : 'hover-left'
      break
    case 15:
      direction = order === 11 ? 'hover-down' : 'hover-right'
      break
    default:
      console.log('iSpace is not found')
      break
  }

  return direction
}

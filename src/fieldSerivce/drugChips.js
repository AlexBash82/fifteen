export const drugChips = (fifteen, from, to) => {
  let fifteenArr = fifteen.slice()
  let itemFrom = fifteenArr[from]
  let itemTo = fifteenArr[to]
  fifteenArr[from] = itemTo
  fifteenArr[to] = itemFrom

  return fifteenArr
}

import { DRUG_CHIPS, SET_ACTIVE, SET_SPACE, SET_FIFTEEN_MEMO } from './types'

const initialState = {
  fifteen: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  active: [],
  space: 16,
  fifteenMemo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
}

export const moveReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRUG_CHIPS:
      return { ...state, fifteen: action.payload }
    case SET_ACTIVE:
      return { ...state, active: action.payload }
    case SET_SPACE:
      return { ...state, space: action.payload }
    case SET_FIFTEEN_MEMO:
      return { ...state, fifteenMemo: action.payload }
    default:
      return state
  }
}

import { SET_FIFTEEN_MEMO, REASSIGN_CHIPS } from './types'

const initialState = {
  fifteen: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  active: [],
  iSpace: 16,
  fifteenMemo: [],
  completed: false,
}

export const moveReducer = (state = initialState, action) => {
  switch (action.type) {
    case REASSIGN_CHIPS:
      return {
        ...state,
        fifteen: action.payloadChips,
        active: action.payloadActive,
        iSpace: action.payloadSpace,
        completed: action.payloadComplete,
      }
    case SET_FIFTEEN_MEMO:
      return { ...state, fifteenMemo: action.payload }
    default:
      return state
  }
}

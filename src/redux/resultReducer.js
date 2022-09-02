import { SET_SCORE } from './types'

const initialState = {
  score: 0,
  bestScore: Infinity,
}

export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, score: action.payload }
    default:
      return state
  }
}

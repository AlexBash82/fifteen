import {
  SET_SCORE,
  SET_BESTSCORE,
  SHOW_BESTSCORE,
  HIDE_BESTSCORE,
} from './types'

const initialState = {
  score: 0,
  bestScore: Infinity,
  existBestScore: false,
}

export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, score: action.payload }
    case SET_BESTSCORE:
      return { ...state, bestScore: action.payload }
    case SHOW_BESTSCORE:
      return { ...state, existBestScore: true }
    case HIDE_BESTSCORE:
      return { ...state, existBestScore: false }
    default:
      return state
  }
}

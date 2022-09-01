import {} from './types'

const initialState = {
  // completed: false,
  score: 0,
  bestScore: Infinity,
}

export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    // case COMPLETED:
    //   return { ...state, completed: true }
    // case NOT_COMPLETED:
    //   return { ...state, completed: false }

    default:
      return state
  }
}

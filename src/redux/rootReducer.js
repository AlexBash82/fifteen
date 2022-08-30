import { combineReducers } from 'redux'
import { moveReducer } from './moveReducer'
import { resultReducer } from './resultReducer'

export const rootReducer = combineReducers({
  move: moveReducer,
  result: resultReducer,
})

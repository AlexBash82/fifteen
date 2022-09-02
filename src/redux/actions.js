import { REASSIGN_CHIPS, SET_FIFTEEN_MEMO, SET_SCORE } from './types'

export function reAssignChips(arrowChips, arrowActive, indexSpace, complete) {
  return {
    type: REASSIGN_CHIPS,
    payloadChips: arrowChips,
    payloadActive: arrowActive,
    payloadSpace: indexSpace,
    payloadComplete: complete,
  }
}

export function setFifteenMemo(arrow) {
  return {
    type: SET_FIFTEEN_MEMO,
    payload: arrow,
  }
}

export function setScore(number) {
  return {
    type: SET_SCORE,
    payload: number,
  }
}

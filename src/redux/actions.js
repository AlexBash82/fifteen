import {
  REASSIGN_CHIPS,
  SET_FIFTEEN_MEMO,
  // COMPLETED,
  // NOT_COMPLETED,
} from './types'

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

// export function complete() {
//   return {
//     type: COMPLETED,
//   }
// }

// export function unComplete() {
//   return {
//     type: NOT_COMPLETED,
//   }
// }

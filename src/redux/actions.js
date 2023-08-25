import {
  HIDE_BESTSCORE,
  REASSIGN_CHIPS,
  SET_BESTSCORE,
  SET_FIFTEEN_MEMO,
  SET_SCORE,
  SHOW_BESTSCORE,
} from './types'

export function reAssignChips(arrowChips, arrowActive, indexSpace, completed) {
  return {
    type: REASSIGN_CHIPS,
    payloadChips: arrowChips,
    payloadActive: arrowActive,
    payloadSpace: indexSpace,
    payloadComplete: completed,
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

export function setBestScore(number) {
  return {
    type: SET_BESTSCORE,
    payload: number,
  }
}

export function showBestScore() {
  return {
    type: SHOW_BESTSCORE,
  }
}

export function hideBestScore() {
  return {
    type: HIDE_BESTSCORE,
  }
}

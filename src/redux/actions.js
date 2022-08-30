import {
  DRUG_CHIPS,
  SET_ACTIVE,
  SET_SPACE,
  SET_FIFTEEN_MEMO,
  COMPLETED,
  NOT_COMPLETED,
} from './types'

export function drugChips(arrow) {
  return {
    type: DRUG_CHIPS,
    payload: arrow,
  }
}

export function setActive(arrow) {
  return {
    type: SET_ACTIVE,
    payload: arrow,
  }
}

export function setSpace(index) {
  return {
    type: SET_SPACE,
    payload: index,
  }
}

export function setFifteenMemo(arrow) {
  return {
    type: SET_FIFTEEN_MEMO,
    payload: arrow,
  }
}

export function complete() {
  return {
    type: COMPLETED,
  }
}

export function unComplete() {
  return {
    type: NOT_COMPLETED,
  }
}

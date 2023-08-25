import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFifteenMemo,
  setScore,
  setBestScore,
  showBestScore,
  hideBestScore,
  reAssignChips,
} from '../redux/actions'
import { checkChips } from '../fieldSerivce/checkChips'
import './Gamefield.scss'
import Square from './Square'
import { drugChips } from '../fieldSerivce/drugChips'

function Gamefield() {
  const dispatch = useDispatch()
  const { fifteen, iSpace, fifteenMemo, completed } = useSelector(
    (state) => state.move
  )
  const { score, bestScore, existBestScore } = useSelector(
    (state) => state.result
  )

  function start() {
    const reduce = (arrowActive, prevSpace) => {
      return arrowActive.filter((item) => item !== prevSpace)
    }

    let fifteenArrow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    let prevSpace = iSpace

    for (let i = 0; i < 200; i++) {
      const [arrowActive, indexSpace] = checkChips(fifteenArrow)
      const nextMoveArr = reduce(arrowActive, prevSpace)
      let nextMoveArrInd = Math.floor(Math.random() * nextMoveArr.length)
      let nextMoveInd = nextMoveArr[nextMoveArrInd]
      let newFifteenArrow = drugChips(fifteenArrow, nextMoveInd, indexSpace)
      fifteenArrow = newFifteenArrow
      prevSpace = nextMoveInd
    }

    const [arrowActive, indexSpace, completed] = checkChips(fifteenArrow)
    dispatch(reAssignChips(fifteenArrow, arrowActive, indexSpace, completed))
    dispatch(setFifteenMemo(fifteenArrow))
    dispatch(setScore(0))
    dispatch(setBestScore(Infinity))
    dispatch(hideBestScore())
  }

  function restart(isOver) {
    if (isOver) {
      let best = score >= bestScore ? bestScore : score
      dispatch(setBestScore(best))
      dispatch(showBestScore())
    }
    dispatch(setScore(0))
    const [arrowActive, indexSpace, completed] = checkChips(fifteenMemo)
    console.log('completed = ', completed)
    dispatch(reAssignChips(fifteenMemo, arrowActive, indexSpace, completed))
  }

  return (
    <div className="Screen">
      <div className="Screen_field">
        {completed && (
          <div className="Screen_field_congratulate">Поздравляем!!!</div>
        )}

        <div className="Screen_field_chips">
          {fifteen.map((item, index) => {
            return <Square key={item} order={index} number={item} />
          })}
        </div>
      </div>
      <div className="Screen_dashboard">
        <div className="Screen_dashboard_buttons">
          <button
            className="Screen_dashboard_buttons_button"
            onClick={() => start()}
          >
            Старт
          </button>
          <button
            className="Screen_dashboard_buttons_button"
            onClick={() => restart(completed)}
            disabled={!score}
          >
            Заново
          </button>
        </div>

        <div className="Screen_dashboard_score">Счет: {score}</div>

        {existBestScore && (
          <div className="Screen_dashboard_score">Бэст: {bestScore}</div>
        )}
      </div>
    </div>
  )
}

export default Gamefield

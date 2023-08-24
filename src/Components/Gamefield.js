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
import { reAssign } from '../reAssign/reAssign'
import './Gamefield.scss'
import Square from './Square'

function Gamefield() {
  const dispatch = useDispatch()
  const { fifteen, active, space, fifteenMemo, completed } = useSelector(
    (state) => state.move
  )
  const { score, bestScore, existBestScore } = useSelector(
    (state) => state.result
  )

  function start() {
    //логика создания порядка фишек (случайный вариант)
    let arrow = []
    let random = () => Math.floor(1 + Math.random() * 16)
    arrow.push(random())
    while (arrow.length < 16) {
      let num = random()
      let result = arrow.includes(num)
      if (!result) {
        arrow.push(num)
      }
    }

    const [arrowChips, arrowActive, indexSpace, complete] = reAssign(arrow)
    dispatch(reAssignChips(arrowChips, arrowActive, indexSpace, complete))
    dispatch(setFifteenMemo(arrow))
    dispatch(setScore(0))
    dispatch(setBestScore(Infinity))
    dispatch(hideBestScore())
  }

  function restart() {
    if (completed) {
      let best = score >= bestScore ? bestScore : score
      dispatch(setBestScore(best))
      dispatch(showBestScore())
    }
    dispatch(setScore(0))
    reAssign(fifteenMemo)
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
            onClick={() => restart()}
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

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFifteenMemo,
  setScore,
  setBestScore,
  showBestScore,
  hideBestScore,
} from '../redux/actions'
import useReAssign from '../customHook/useReAssign'
import './Gamefield.scss'
import Square from './Square'

function Gamefield() {
  const dispatch = useDispatch()
  const fifteen = useSelector((state) => state.move.fifteen)
  const fifteenMemo = useSelector((state) => state.move.fifteenMemo)
  const completed = useSelector((state) => state.move.complete)
  const score = useSelector((state) => state.result.score)
  const bestScore = useSelector((state) => state.result.bestScore)
  const existBestScore = useSelector((state) => state.result.existBestScore)
  const reAssign = useReAssign()

  function start() {
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
    reAssign(arrow)
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
        {completed ? (
          <div className="Screen_field_congratulate">Congratulate</div>
        ) : (
          <div className="Screen_field_chips">
            {fifteen.map((item, index) => {
              return <Square key={item} order={index} number={item} />
            })}
          </div>
        )}
      </div>
      <div className="Screen_dashboard">
        <div className="Screen_dashboard_buttons">
          <button
            className="Screen_dashboard_buttons_button"
            onClick={() => start()}
          >
            Start
          </button>
          <button
            className="Screen_dashboard_buttons_button"
            onClick={() => restart()}
            disabled={!score}
          >
            Restart
          </button>
        </div>

        <div className="Screen_dashboard_score">Score: {score}</div>

        {existBestScore && (
          <div className="Screen_dashboard_score">Best score: {bestScore}</div>
        )}
      </div>
    </div>
  )
}

export default Gamefield

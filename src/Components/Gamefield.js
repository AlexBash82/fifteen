import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFifteenMemo,
  // complete,
  // unComplete,
  reAssignChips,
} from '../redux/actions'
import './Gamefield.scss'
import Square from './Square'

function Gamefield() {
  const dispatch = useDispatch()
  const fifteen = useSelector((state) => state.move.fifteen)
  const fifteenMemo = useSelector((state) => state.move.fifteenMemo)
  const completed = useSelector((state) => state.move.complete)

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(Infinity)
  const [bestScoreShow, setBestScoreShow] = useState(false)

  function drug(order, indSpace) {
    let fifteenArr = fifteen.slice()
    let itemA = fifteenArr[order]
    let itemB = fifteenArr[indSpace]
    fifteenArr[order] = itemB
    fifteenArr[indSpace] = itemA

    reAssign(fifteenArr)

    setScore((prevScore) => prevScore + 1)
  }

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

    setBestScore(Infinity)
    setBestScoreShow(false)
    setScore(0)
  }

  function restart() {
    setBestScore(() => {
      if (completed) {
        let best = score >= bestScore ? bestScore : score
        return best
      }
      return Infinity
    })
    setBestScoreShow(completed ? true : false)
    setScore(0)

    reAssign(fifteenMemo)
  }

  function reAssign(arrowChips) {
    const indexSpace = arrowChips.indexOf(16)
    let arrowActive = []
    switch (indexSpace) {
      case 0:
        arrowActive = [1, 4]
        break
      case 1:
        arrowActive = [0, 2, 5]
        break
      case 2:
        arrowActive = [1, 3, 6]
        break
      case 3:
        arrowActive = [2, 7]
        break
      case 4:
        arrowActive = [0, 5, 8]
        break
      case 5:
        arrowActive = [1, 4, 6, 9]
        break
      case 6:
        arrowActive = [2, 5, 7, 10]
        break
      case 7:
        arrowActive = [3, 6, 11]
        break
      case 8:
        arrowActive = [4, 9, 12]
        break
      case 9:
        arrowActive = [5, 8, 10, 13]
        break
      case 10:
        arrowActive = [6, 9, 11, 14]
        break
      case 11:
        arrowActive = [7, 10, 15]
        break
      case 12:
        arrowActive = [8, 13]
        break
      case 13:
        arrowActive = [9, 12, 14]
        break
      case 14:
        arrowActive = [10, 13, 15]
        break
      case 15:
        arrowActive = [11, 14]
        break
      default:
        console.log('iSpace is not found')
        break
    }

    const result = arrowChips.filter((item, index) => --item === index)
    let complete
    if (result.length === 16) {
      complete = true
    } else {
      complete = false
    }

    dispatch(reAssignChips(arrowChips, arrowActive, indexSpace, complete))
  }

  return (
    <div className="Screen">
      <div className="Screen_field">
        {completed ? (
          <div className="Screen_field_congratulate">Congratulate</div>
        ) : (
          <div className="Screen_field_chips">
            {fifteen.map((item, index) => {
              return (
                <Square key={index} order={index} number={item} drug={drug} />
              )
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

        {bestScoreShow && (
          <div className="Screen_dashboard_score">Best score: {bestScore}</div>
        )}
      </div>
    </div>
  )
}

export default Gamefield

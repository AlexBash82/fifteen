import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  drugChips,
  setActive,
  setSpace,
  setFifteenMemo,
  complete,
  unComplete,
} from '../redux/actions'
import './Gamefield.scss'
import Square from './Square'

function Gamefield() {
  const dispatch = useDispatch()
  const fifteen = useSelector((state) => state.move.fifteen)
  const fifteenMemo = useSelector((state) => state.move.fifteenMemo)
  const completed = useSelector((state) => state.result.completed)

  //const [finish, setFinish] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(Infinity)
  const [bestScoreShow, setBestScoreShow] = useState(false)

  function drug(order, indSpace) {
    let fifteenArr = fifteen.slice()
    let itemA = fifteenArr[order]
    let itemB = fifteenArr[indSpace]
    fifteenArr[order] = itemB
    fifteenArr[indSpace] = itemA
    dispatch(drugChips(fifteenArr))
    dispatch(setSpace(fifteenArr.indexOf(16)))
    reAssignActive(fifteenArr.indexOf(16))
    let result = fifteenArr.filter((item, index) => --item === index)
    if (result.length === 16) {
      dispatch(complete())
    }

    setScore((prevScore) => prevScore + 1)

    //setFinish(result.length === 16 ? true : false)
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

    dispatch(drugChips(arrow))
    dispatch(setFifteenMemo(arrow))
    dispatch(setSpace(arrow.indexOf(16)))
    reAssignActive(arrow.indexOf(16))
    if (completed) {
      dispatch(unComplete())
    }

    setBestScore(Infinity)
    setBestScoreShow(false)
    setScore(0)
    //setFinish(false)
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

    dispatch(drugChips(fifteenMemo))
    dispatch(setSpace(fifteenMemo.indexOf(16)))
    reAssignActive(fifteenMemo.indexOf(16))
    if (completed) {
      dispatch(unComplete())
    }

    //setFinish(false)
  }

  function reAssignActive(indexSpace) {
    let arrActive = []
    switch (indexSpace) {
      case 0:
        arrActive = [1, 4]
        break
      case 1:
        arrActive = [0, 2, 5]
        break
      case 2:
        arrActive = [1, 3, 6]
        break
      case 3:
        arrActive = [2, 7]
        break
      case 4:
        arrActive = [0, 5, 8]
        break
      case 5:
        arrActive = [1, 4, 6, 9]
        break
      case 6:
        arrActive = [2, 5, 7, 10]
        break
      case 7:
        arrActive = [3, 6, 11]
        break
      case 8:
        arrActive = [4, 9, 12]
        break
      case 9:
        arrActive = [5, 8, 10, 13]
        break
      case 10:
        arrActive = [6, 9, 11, 14]
        break
      case 11:
        arrActive = [7, 10, 15]
        break
      case 12:
        arrActive = [8, 13]
        break
      case 13:
        arrActive = [9, 12, 14]
        break
      case 14:
        arrActive = [10, 13, 15]
        break
      case 15:
        arrActive = [11, 14]
        break
      default:
        console.log('iSpace is not found')
        break
    }
    dispatch(setActive(arrActive))
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

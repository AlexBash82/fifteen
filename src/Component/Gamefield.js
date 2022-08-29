import React, { useRef, useState } from 'react'
import './Gamefield.scss'
import Square from './Square'

function Gamefield() {
  const [fifteen, setFifteen] = useState([])
  const [finish, setFinish] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(Infinity)
  const [bestScoreShow, setBestScoreShow] = useState(false)
  const refArrow = useRef([]) //запоминаем расклад
  const [active, setActive] = useState([])
  const [iSpace, setISpace] = useState()

  function drug(order, indSpace) {
    let fifteenArr = fifteen.slice()
    let itemA = fifteenArr[order]
    let itemB = fifteenArr[indSpace]
    fifteenArr[order] = itemB
    fifteenArr[indSpace] = itemA
    setFifteen(fifteenArr)
    setISpace(fifteenArr.indexOf(16))
    setScore((prevScore) => prevScore + 1)
    let result = fifteenArr.filter((item, index) => --item === index)
    if (result.length === 16) {
      setFinish(true)
    }
    reAssignActive(fifteenArr.indexOf(16))
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
    refArrow.current = arrow
    setBestScore(Infinity)
    setBestScoreShow(false)
    setFifteen(arrow)
    setISpace(arrow.indexOf(16))
    setScore(0)
    setFinish(false)
    reAssignActive(arrow.indexOf(16))
  }

  function restart() {
    setBestScore(() => {
      if (finish) {
        let best = score >= bestScore ? bestScore : score
        return best
      }
      return Infinity
    })
    setBestScoreShow(finish ? true : false)
    setFifteen(refArrow.current)
    setScore(0)
    setFinish(false)
    setISpace(refArrow.current.indexOf(16))
    reAssignActive(refArrow.current.indexOf(16))
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
    setActive(arrActive)
  }

  return (
    <div className="Screen">
      <button onClick={() => start()}>Start</button>
      <button onClick={() => restart()}>Restart</button>
      {score ? <div>Score: {score}</div> : false}
      {bestScoreShow && <div>Best score: {bestScore}</div>}
      <div className="Screen_field">
        {fifteen.map((item, index) => {
          return (
            <Square
              key={index}
              order={index}
              number={item}
              iSpace={iSpace}
              drug={drug}
              finish={finish}
              active={active}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gamefield

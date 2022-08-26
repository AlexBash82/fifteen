import React, { useRef, useState } from 'react'
import './Gamefield.scss'
import Square from './Square'

function Gamefield() {
  const [fifteen, setFifteen] = useState([])
  const [finish, setFinish] = useState(false)
  const [steps, setSteps] = useState(0)
  const refArrow = useRef([])

  function drug(order, iSpace) {
    let fifteenArr = fifteen.slice()
    let itemA = fifteenArr[order]
    let itemB = fifteenArr[iSpace]
    fifteenArr[order] = itemB
    fifteenArr[iSpace] = itemA
    setFifteen(fifteenArr)
    setSteps((prevSteps) => prevSteps + 1)
    let result = fifteenArr.filter((item, index) => --item === index)
    if (result.length === 16) {
      setFinish(true)
    }
  }

  function start() {
    let arrow = []
    let random = () => Math.floor(1 + Math.random() * 16)
    arrow.push(random())
    while (arrow.length < 16) {
      let num = random()
      let result = arrow.find((item) => item === num)
      if (!result) {
        arrow.push(num)
      }
    }
    refArrow.current = arrow
    setFifteen(arrow)
    setSteps(0)
  }

  function restart() {
    setFifteen(refArrow.current)
    setSteps(0)
  }

  return (
    <div className="Screen">
      <button onClick={() => start()}>Start</button>
      <button onClick={() => restart()}>Restart</button>
      <div>Amount steps: {steps}</div>
      <div className="Screen_field">
        {fifteen.map((item, index) => {
          return (
            <Square
              key={index}
              order={index}
              number={item}
              fifteen={fifteen}
              drug={drug}
              finish={finish}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gamefield

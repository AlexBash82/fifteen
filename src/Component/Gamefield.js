import React, { useState } from 'react'
import './Gamefield.scss'
import Square from './Square'

function Gamefield({ arr }) {
  const [fifteen, setFifteen] = useState(arr)
  const [finish, setFinish] = useState(false)

  function drug(order, iSpace) {
    let fifteenArr = fifteen
    let itemA = fifteenArr[order]
    let itemB = fifteenArr[iSpace]
    fifteenArr[order] = itemB
    fifteenArr[iSpace] = itemA
    setFifteen(fifteenArr.concat([]))
    let result = fifteenArr.filter((item, index) => --item === index)
    if (result.length === 16) {
      setFinish(true)
    }
  }

  return (
    <div className="Screen">
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

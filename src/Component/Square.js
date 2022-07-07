import React from 'react'
import './Square.scss'

function Square({ order, number, fifteen, drug, finish }) {
  const styles = {
    button: {
      order: order,
    },
  }

  function check() {
    let iSpace = fifteen.indexOf(16)
    switch (order) {
      case 0:
        ;(iSpace === 1 || iSpace === 4) && drug(order, iSpace)
        break
      case 1:
        ;(iSpace === 0 || iSpace === 5 || iSpace === 2) && drug(order, iSpace)
        break
      case 2:
        ;(iSpace === 1 || iSpace === 6 || iSpace === 3) && drug(order, iSpace)
        break
      case 3:
        ;(iSpace === 2 || iSpace === 7) && drug(order, iSpace)
        break
      case 4:
        ;(iSpace === 0 || iSpace === 5 || iSpace === 8) && drug(order, iSpace)
        break
      case 5:
        ;(iSpace === 1 || iSpace === 4 || iSpace === 6 || iSpace === 9) &&
          drug(order, iSpace)
        break
      case 6:
        ;(iSpace === 2 || iSpace === 5 || iSpace === 7 || iSpace === 10) &&
          drug(order, iSpace)
        break
      case 7:
        ;(iSpace === 3 || iSpace === 6 || iSpace === 11) && drug(order, iSpace)
        break
      case 8:
        ;(iSpace === 4 || iSpace === 9 || iSpace === 12) && drug(order, iSpace)
        break
      case 9:
        ;(iSpace === 5 || iSpace === 8 || iSpace === 10 || iSpace === 13) &&
          drug(order, iSpace)
        break
      case 10:
        ;(iSpace === 6 || iSpace === 9 || iSpace === 11 || iSpace === 14) &&
          drug(order, iSpace)
        break
      case 11:
        ;(iSpace === 7 || iSpace === 10 || iSpace === 15) && drug(order, iSpace)
        break
      case 12:
        ;(iSpace === 8 || iSpace === 13) && drug(order, iSpace)
        break
      case 13:
        ;(iSpace === 12 || iSpace === 9 || iSpace === 14) && drug(order, iSpace)
        break
      case 14:
        ;(iSpace === 13 || iSpace === 10 || iSpace === 15) &&
          drug(order, iSpace)
        break
      case 15:
        ;(iSpace === 14 || iSpace === 11) && drug(order, iSpace)
        break
    }
  }

  return (
    <button
      disabled={number === 16 ? true : false}
      className={`Square ${finish ? 'greeting' : ''}`}
      style={styles.button}
      onClick={() => check()}
    >
      {`${number === 16 ? '' : number}`}
    </button>
  )
}

export default Square

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reAssignChips, setScore } from '../redux/actions'
import { reAssign } from '../reAssign/reAssign'
import './Square.scss'

function Square({ order, number }) {
  const styles = {
    button: {
      order,
    },
  }
  const dispatch = useDispatch()
  const fifteen = useSelector((state) => state.move.fifteen)
  const score = useSelector((state) => state.result.score)
  const iSpace = useSelector((state) => state.move.space)
  const active = useSelector((state) => state.move.active)
  const completed = useSelector((state) => state.move.complete)

  function check() {
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
      default:
        console.log('check is fall down')
        break
    }
  }

  function drug(order, indSpace) {
    let fifteenArr = fifteen.slice()
    let itemA = fifteenArr[order]
    let itemB = fifteenArr[indSpace]
    fifteenArr[order] = itemB
    fifteenArr[indSpace] = itemA

    const [arrowActive, indexSpace, complete] = reAssign(fifteenArr)
    dispatch(reAssignChips(fifteenArr, arrowActive, indexSpace, complete))
    dispatch(setScore(score + 1))
  }

  return (
    <button
      disabled={!active.includes(order) || completed}
      className={`Square ${number === 16 ? 'empty' : ''}`}
      style={styles.button}
      onClick={() => check()}
    >
      {`${number === 16 ? '' : number}`}
    </button>
  )
}

export default Square

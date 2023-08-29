import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reAssignChips, setScore } from '../redux/actions'
import { findActiveChips } from '../fieldSerivce/findActiveChips'
import { drugChips } from '../fieldSerivce/drugChips'
import { determDirect } from '../fieldSerivce/determDirect'
import './Square.scss'

function Square({ order, number }) {
  const styles = {
    button: {
      order,
    },
  }
  const dispatch = useDispatch()
  const { fifteen, iSpace, active, completed } = useSelector(
    (state) => state.move
  )
  const score = useSelector((state) => state.result.score)
  const direction = determDirect(order, iSpace)

  function handMove() {
    const fifteenArr = drugChips(fifteen, order, iSpace)
    const [arrowActive, indexSpace, completed] = findActiveChips(fifteenArr)
    dispatch(reAssignChips(fifteenArr, arrowActive, indexSpace, completed))
    dispatch(setScore(score + 1))
  }

  return (
    <button
      disabled={!active.includes(order) || completed}
      className={[
        `Square ${number === 16 ? 'empty' : ''} ${
          active.includes(order) && !completed ? direction : ''
        }`,
      ]}
      style={styles.button}
      onClick={() => handMove()}
    >
      {`${number === 16 ? '' : number}`}
    </button>
  )
}

export default Square

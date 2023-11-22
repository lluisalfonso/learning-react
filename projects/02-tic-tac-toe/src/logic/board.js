import { WINNER_COMBOS, TURNS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
  for (const winnerCombo of WINNER_COMBOS) {
    const [a, b, c] = winnerCombo
    if (
      boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGameFrom = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null)
}

export const getNewTurn = (turn) => {
  return turn === TURNS.X ? TURNS.O : TURNS.X
}

export const getInitialTurn = () => {
  return Math.round(Math.random()) ? TURNS.X : TURNS.O
}

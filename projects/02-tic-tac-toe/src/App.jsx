import { useState } from "react"
import confetti from "canvas-confetti"
import { checkWinnerFrom, checkEndGameFrom, getNewTurn, getInitialTurn } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"
import { Turn } from "./components/Turn"
import { Board } from "./components/Board"
import { StartAgainButton } from "./components/StartAgainButton"

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(
    getInitialTurn()
  )

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    console.log(board[index])
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = getNewTurn(turn)
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGameFrom(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(getInitialTurn())
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>

      <StartAgainButton resetGame={resetGame}/>

      <Board board={board} updateBoard={updateBoard}/>

      <Turn turn={turn}></Turn>
      
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  )
}

export default App
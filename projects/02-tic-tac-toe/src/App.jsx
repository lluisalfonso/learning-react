import { useState } from "react"
import confetti from "canvas-confetti"
import { checkWinnerFrom, checkEndGameFrom, getNewTurn, getInitialTurn } from "./logic/board"
import { saveBoardState, loadBoardFromStorage, loadTurnFromStorage, removeBoardStateFromStorage } from "./logic/storage"
import { WinnerModal } from "./components/WinnerModal"
import { Turn } from "./components/Turn"
import { Board } from "./components/Board"
import { StartAgainButton } from "./components/StartAgainButton"

function App() {
  const [board, setBoard] = useState(() => {
      const boardFromStorage = loadBoardFromStorage()
      return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    }
  )

  const [turn, setTurn] = useState(() => {
      const turnFromStorage = loadTurnFromStorage()
      return turnFromStorage ? turnFromStorage : getInitialTurn()
    }
  )

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = getNewTurn(turn)
    setTurn(newTurn)

    saveBoardState({
      board: newBoard, 
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner) {
      setWinner(newWinner)
      confetti()
      removeBoardStateFromStorage()
    } else if (checkEndGameFrom(newBoard)) {
      setWinner(false)
      removeBoardStateFromStorage()
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(getInitialTurn())
    setWinner(null)
    removeBoardStateFromStorage()
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
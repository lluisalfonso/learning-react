export const saveBoardState = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const loadBoardFromStorage = () => {
    return window.localStorage.getItem('board')
}

export const loadTurnFromStorage = () => {
    return window.localStorage.getItem('turn')
}

export const removeBoardStateFromStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
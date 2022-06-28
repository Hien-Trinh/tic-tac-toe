import BoardSquare from "./BoardSquare";
import { useState } from "react";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [winner, setWinner] = useState(null)

    function handleClick(i) {
        const squaresCopy = [...squares]
        if (squaresCopy[i] || winner) {
            return
        }
        squaresCopy[i] = currentPlayer
        setSquares(squaresCopy)
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
        setWinner(calculateWinner(squaresCopy))
        console.log(squares)
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }

    return (
        <div>
            <p className="text-center">Hey {currentPlayer}, it's your turn</p>
            <div className="grid grid-cols-3 grid-rows-3 border-[1px]">
                {Array(9).fill(null).map((_, i) => {
                    return <BoardSquare key={i} index={i} value={squares[i]} onClick={() => handleClick(i)} />
                })}
            </div>
        </div>
    )
}
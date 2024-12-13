import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 9 cells
  const [isXNext, setIsXNext] = useState(true); // Player's turn (X)
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXNext(false);

      setTimeout(() => aiMove(newBoard), 500); // AI's turn
    }
  };

  const aiMove = (currentBoard) => {
    if (winner) return;

    const availableSpots = currentBoard
      .map((cell, index) => (cell === null ? index : null))
      .filter((cell) => cell !== null);

    if (availableSpots.length === 0) return;

    const randomIndex = availableSpots[Math.floor(Math.random() * availableSpots.length)];
    currentBoard[randomIndex] = "O";

    setBoard(currentBoard);

    const gameWinner = calculateWinner(currentBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXNext(true);
    }
  };

  const calculateWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-6">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-4 w-64">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`w-20 h-20 flex items-center justify-center rounded-lg text-3xl font-bold cursor-pointer border-4 
              ${
                cell === "X"
                  ? "text-blue-800 border-blue-800"
                  : cell === "O"
                  ? "text-purple-800 border-purple-800"
                  : "border-white hover:bg-white hover:opacity-80"
              }`}
            onClick={() => isXNext && handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="mt-6 text-2xl text-white">
        {winner ? (
          <p>
            🎉 Winner: <span className="font-bold">{winner}</span>
          </p>
        ) : (
          <p>{isXNext ? "Your Turn (X)" : "AI's Turn (O)"}</p>
        )}
      </div>
      <button
        onClick={resetGame}
        className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg font-bold hover:bg-blue-500 hover:text-white transition"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;

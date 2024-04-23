import React, { useEffect, useState } from "react";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="m-[1px] w-20 h-20">
      {value}
    </button>
  );
}

function TicTacToe() {
  const [square, setSquare] = useState(Array(9).fill("_"));
  const [turn, setTurn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(square) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (square[x] !=='_' && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }

    return null;
  }
  function handleRestart() {
    setTurn(true);
    setSquare(Array(9).fill("_"));
  }
  function handleClick(currSquare) {
    let arr = [...square];
    if (getWinner(arr) || arr[currSquare] !== "_") return;
    arr[currSquare] = turn ? "X" : "O";
    setTurn((prev) => !prev);
    setSquare(arr);
  }

  useEffect(() => {
    if (!getWinner(square) && square.every((item) => item != "_")) {
      setStatus("It's a draw. You can restart!");
    } else if (getWinner(square)) {
      setStatus(`The winner is ${getWinner(square)}. You can restart!`);
    } else {
      setStatus(`${turn ? "X" : "O"}'s turn`);
    }
  }, [turn, square]);

  return (
    <>
      <div className="text-center p-4 m-4">
        <p className="m-2 font-bold text-xl ">Tic Tac Toe</p>
        <div>
          <Square value={square[0]} onClick={() => handleClick(0)} />
          <Square value={square[1]} onClick={() => handleClick(1)} />
          <Square value={square[2]} onClick={() => handleClick(2)} />
        </div>
        <div>
          <Square value={square[3]} onClick={() => handleClick(3)} />
          <Square value={square[4]} onClick={() => handleClick(4)} />
          <Square value={square[5]} onClick={() => handleClick(5)} />
        </div>
        <div>
          <Square value={square[6]} onClick={() => handleClick(6)} />
          <Square value={square[7]} onClick={() => handleClick(7)} />
          <Square value={square[8]} onClick={() => handleClick(8)} />
        </div>
        <p className="m-4">{status}</p>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </>
  );
}

export default TicTacToe;

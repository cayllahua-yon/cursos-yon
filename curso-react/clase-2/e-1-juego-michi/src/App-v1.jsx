import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"

const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]
];



//Un componente
const Square = ({children,isSelected, updateBoard, index}) => {
  const classNameSquare = `square ${isSelected ? 'is-selected' : ' '}`; // square
    
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={classNameSquare}>
      {children}
    </div>
  )
}



/**APP**/
function App() {
  // const board = Array(9).fill(null);
  const [board, setBoard] = useState( Array(9).fill(null) );
  // const [board, setBoard] = useState( ['x','x','x','o','x','o','o','x','o']);
  // console.log(board)
  const [turn, setTurn] = useState(TURNS.X);

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo;
      //0 -> x u o
      if (boardToCheck[a] && (boardToCheck[a] == boardToCheck[b] ) && ( boardToCheck[a] == boardToCheck[c])) {
        return boardToCheck[a]; // x u o
      }
      
    }
    // si no hay ganador null
    return null
  }
  /*======RESET GAME======*/
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  const checkEndGame= (newBoard) =>{
    //revisamos si hay empate, si no hay mas espacios vacios o null en el tablero
    return newBoard.every((square)=>square != null)
  }

  /*************UPDATE BOARD***************/
  const updateBoard = (index) =>{
    /*=====No actualizamos la posicion Si existe un valor=====*/
    if (board[index] || winner) return    // verificar posicion

    /**====Actualizar Tablero===*/
    const newBoard = [...board];  //  structuredClone(board) // copia profunda del Array    
    // spread Opereitor [...board] y rest operator
    newBoard[index] = turn;    // No mutar nunca las prompt ni el estado -- tratar como inmutables
    setBoard(newBoard);  // asincrono

    /*====Cambiar el turno=======*/
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    
    /*==Revisamos si hay ganador  == Nota verificar despues del 4 click en board== */
    const newWinner = checkWinner(newBoard);    
    if (newWinner) {//la actualizacion en react de los estados son ASYNC
      confetti()
      setWinner(newWinner); // tener encuanto al acceder al valor newWinner

    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1> Juego Michi </h1> 

      <button onClick={resetGame}>Reset del Juego</button>

      <section className='game'>
        {
          board.map((_, index)=>{
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      
      <section className='turn'>
        <Square isSelected={turn == TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn == TURNS.O}> {TURNS.O} </Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                { winner == false ? 'Empate': 'Gáno:'}
              </h2>
              <header className='win'>
                { winner && <Square>{winner}</Square> }
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }

    </main>

  )
}

export default App

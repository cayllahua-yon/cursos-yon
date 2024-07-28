import { useEffect, useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx'
import {TURNS} from "./constants.jsx"
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import {resetGameStorage, saveGameStorage} from './logic/storage/index.js'


//Constantes  TURNS - WINNER_COMBOS
//Componente Square
//useEffect -> que permite ejecutar codigo arbitrario cuando en el 
// componente se monta en el DOM y cada vez que cambia las dependecias que nosotros digamos
// dentro de un Componente
//  useEffect(codeToExecute, ListOfDependencies) // como minimo se ejecuitara 1 vez
// useEffect(()=>{
// console.log('Ejecutando el codigo')
// },[])
//Segundo parametro es opcional, si no se pasa, se ejecutara cada vez  que se renderice el componente



/**APP**/
function App() {
  // const board = Array(9).fill(null);
  // const [board, setBoard] = useState( Array(9).fill(null) );
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);

  });


  // const [board, setBoard] = useState( ['x','x','x','o','x','o','o','x','o']);
  // console.log(board)
  // const [turn, setTurn] = useState(TURNS.X);
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X
  });

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  //checkWinner
    


  /*======RESET GAME======*/
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    // localstorage remove
    resetGameStorage()
  }

  //checkEndGame

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
    //guardamos partida local Storage
    saveGameStorage({newBoard, newTurn})

    /*==Revisamos si hay ganador  == Nota verificar despues del 4 click en board== */
    const newWinner = checkWinnerFrom(newBoard);    
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

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>

  )
}

export default App

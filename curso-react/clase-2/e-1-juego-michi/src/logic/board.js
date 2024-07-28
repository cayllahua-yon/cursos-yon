import { WINNER_COMBOS } from "../constants.jsx";

export const checkWinnerFrom = (boardToCheck) => {
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

export const checkEndGame= (newBoard) =>{
    //revisamos si hay empate, si no hay mas espacios vacios o null en el tablero
    return newBoard.every((square)=>square != null)
}


import { useState } from "react";
import Card from "../card/card";
import './grid.css'
import isWinner from "../../src/helpers/checkwinner.js";
function Grid({numberOfCards}) {

    const [board,setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn,setTurn]  = useState(true) // true => 0 ,false => x;
    const [winner,setWinner] = useState(null)
   //  const[draw,setdraw] = useState(null)
    function play(index){
      // console.log(index)
      if (turn == true) {
         board[index] = "O"
      }
      else{
         board[index] = "X"
      } 
      const win = isWinner( board, turn ? "O" : "X" )
      if(win){
         setWinner(win)
         
      }
      
     setBoard([...board]);
     setTurn(!turn);
    }
    function reset() {
      setBoard(Array(numberOfCards).fill(""));
      setWinner(null);
      setTurn(true);
  }
    
     return (
     <div className="grid-wrapper">
      {
         winner && (
            <>
               <h1 className="turn-highlight"> winner is {winner}</h1>
               <button className="reset" onClick={reset}> Reset game</button>
               
            </>
           )
      }
   
      <h1 className="turn-highlight">Current Turn :  {(turn) ? "O":"X"}</h1>
      <div className="grid">
         {board.map((el,idx) => <Card key = {idx} gameEnd={winner ? true:false} onPlay = {play} player={el} index={idx} />)}
 
      </div>  
   </div>
     )
}

export default Grid;
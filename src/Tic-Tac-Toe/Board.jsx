import React, { useEffect, useState } from "react";

import Square from "./Square";

const Board = ()=>{

    const [state,setstate]= useState(Array(9).fill(null));
    const [isXTurn,setisXturn] = useState(true);
    const[winner,setwinner]=useState(null);

    const checkwinner =()=>{
        const winnerlog =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,4,8],
            [0,4,8],
            [2,4,6]
    ];
     for( let logic of winnerlog){
        const [a,b,c]= logic;
        if(state[a]!=null && state[a]===state[b] && state[a]===state[c]){
            return state[a]
        }
        
     }
     return null;
    }
    useEffect(() => {
        const winner = checkwinner();
        if (winner) {
          setwinner(winner);
          setTimeout(() => alert(`Player ${winner} Wins! 🎉`), 100); // Delayed alert to avoid re-render issue
        }else if (state.every((val) => val !== null)) {
            setTimeout(() => alert("It's a Draw!"), 100);
      }
    }, [state]);



    const handleclick = (index)=>{
        if(state[index]!=null || winner){
            return
        }
        const copystate = [...state];
        copystate[index]= isXTurn ? "X" : "O" ;
        setstate(copystate);
        setisXturn(!isXTurn);
    }
    const reset =()=>{
        setstate(Array(9).fill(null));
        setwinner(null);
    }

    return(
        
        <div className="board-container">
            
            
            <>
            <h1 className="name">TIC -TAC-TOE</h1>
        <h2 className="turn">PLAYER: {isXTurn ? "X" : "O" } </h2>
        <div className="board-row">
            <Square onClick={()=>handleclick(0)} value={state[0]}/>
            <Square onClick={()=>handleclick(1)} value={state[1]}/>
            <Square onClick={()=>handleclick(2)} value={state[2]}/>
        </div>
        <div className="board-row">
            <Square onClick={()=>handleclick(3)} value={state[3]}/>
            <Square onClick={()=>handleclick(4)} value={state[4]}/>
            <Square onClick={()=>handleclick(5)} value={state[5]}/>
        </div>
        <div className="board-row">
            <Square onClick={()=>handleclick(6)} value={state[6]}/>
            <Square onClick={()=>handleclick(7)} value={state[7]}/>
            <Square onClick={()=>handleclick(8)} value={state[8]}/>
        </div>
        </>
        <button className="restart" onClick={reset}>Restart</button>
    </div>
    )
}  

    
export default Board;
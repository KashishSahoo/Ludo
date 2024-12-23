import { useState } from "react";

export default function Ludo() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [arr,setArr] = useState(["no moves"]);

  let updateBlue = () => {
    setMoves((preMoves)=>{
       return {...preMoves,blue:preMoves.blue+1}
    });

    setArr((prevArr)=>{
        return [...prevArr," blue moves"];
    });
    
  };

  let updateYellow = () => {
    setMoves((preMoves)=>{
       return {...preMoves,yellow:preMoves.yellow+1}
    });
    setArr((prevArr)=>{
      return [...prevArr," yellowg moves"];
  })
  };

  let updateGreen = () => {
    setMoves((preMoves)=>{
       return {...preMoves,green:preMoves.green+1}
    });
    setArr((prevArr)=>{
      return [...prevArr," green moves"];
  })
  };

  let updateRed = () => {
    setMoves((preMoves)=>{
       return {...preMoves,red:preMoves.red+1}
    });
    setArr((prevArr)=>{
      return [...prevArr," red moves"];
  })
  };

  return (
    <div>
      <p>Ludo Game</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue moves={moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
        <p>Yellow moves={moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }}onClick={updateYellow}>+1</button>
        <p>Green moves={moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
        <p>Red moves={moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";

export default function LotteryTicket({n=5,winCondition}) {
   
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);

    let buyTicket=()=>{
       setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
            <Ticket ticket={ticket}/>
            </div>
            <Button action={buyTicket}/>
            <br /> <br />
            <h3>{isWinning && "Congratulations,You Won!!"}</h3>
        </div>
    )

     
}

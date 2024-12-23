import { useState } from "react";

export default function Lottery() {
  let [ticket, setTicket] = useState(0);
  const [result, setResult] = useState('');

  let lotteryTicket = () => {
    const myTicket = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    checkSumOfDigits(myTicket);
    setTicket(myTicket);
  };
  const checkSumOfDigits = (inputNumber) => {
    let sum = 0;
    while(inputNumber!=0){
        let r = inputNumber % 10;  
        sum += Math.floor(r);  
        inputNumber = Math.floor(inputNumber / 10);  
    }
  
    setResult(sum === 15 ? 'Sum is 15!' : 'Sum is not 15.');
  };

  return (
    <div>
      {result == 'Sum is 15!' ? <p>Congratulations Won</p> : <p>Better luck next time</p>}
      <h3>Your Lottery Ticket= {ticket}</h3>
      <button onClick={lotteryTicket}>
        <b>Get Lottery Ticket</b>
      </button>
    </div>
  );
}

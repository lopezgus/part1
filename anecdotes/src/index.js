import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';


// Button component
const Boton = ({text, click}) => <button onClick={click}> {text} </button>;

const App = ({anecdotes}) => {
  
  const random = () => {
    return Math.floor((Math.random() * Math.floor(anecdotes.length)));
  }
  const [selected, setSelected] = useState(random());

  const ArrayInic = (valor, long) => {
    let arr=[],i=0;
    while (i<long) arr[i++]= valor;
    return arr;
  }
  // State initialized wiht an array with 0 
  const [votos, setVotos] = useState(ArrayInic (0, anecdotes.length));

  // look for max # of votes in the array
  const maxVotos = Math.max(...votos);

  //return index to highest voted
  const anecdotaMasVotada = anecdotes[votos.indexOf(maxVotos)];

  const nextAnecdote = () => (setSelected(random()));

  const voto = () => {
    const copiaVotos = [...votos];
    copiaVotos[selected] +=1;
    setVotos (copiaVotos);
    }
    
   return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votos[selected]} votes</p>
      <Boton text="vote" click= {voto} /> 
      <Boton text="Next anecdote" click= {nextAnecdote} /> 
      <h1>Anecdote with most votes</h1>
      <p>{anecdotaMasVotada}</p>
      <p>has {maxVotos} votes</p>
    </div>    
  )
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);


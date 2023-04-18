import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

const Statistics = ({datGood, datNeutral, datBad}) => {
  if (datGood + datNeutral + datBad === 0) {
    return (
      <div>
        <br></br>
        ¡¡No comments yet!!
      </div>
    )
  }
   return(
    <div>
    <h1>statistics</h1>
    <ul>
    <p>good {datGood}</p>
    <p>neutral {datNeutral}</p>
    <p>bad {datBad}</p>
    <p>all {datGood + datNeutral + datBad}</p>
    <p>average {(datGood - datBad)/(datGood + datNeutral + datBad)}</p>
    <p>positive {100*(datGood / (datGood + datNeutral + datBad))}%</p>
    </ul>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    
    <div>
    <h1>give feedback</h1>
      
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <Statistics 
        datGood = {good}
        datNeutral = {neutral}
        datBad = {bad} />

    </div>
  )
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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
    <table>
      <tbody>
        <tr>
        <td>good</td>
          <td>{datGood}</td>
        </tr>
        <tr>
        <td>neutral</td>
          <td>{datNeutral}</td>
        </tr>
        <tr>
        <td>bad</td>
          <td>{datBad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{datGood + datNeutral + datBad}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(datGood - datBad)/(datGood + datNeutral + datBad)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{100*(datGood / (datGood + datNeutral + datBad))}%</td>
        </tr>
      </tbody>
    </table>
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

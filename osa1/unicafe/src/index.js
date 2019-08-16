import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }


  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Good</td><td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td><td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td><td>{props.bad}</td>
          </tr>
          <tr>
            <td>all</td><td>{props.allClicks}</td>
          </tr>
          <tr>
            <td>average</td><td>{props.avarageyht/props.allClicks}</td>
          </tr>
          <tr>
          <td>positive</td><td>{props.good/props.allClicks*100} %</td>
          </tr>
        </tbody>
      </table>  
    </div>
  )
}




const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [avarageyht, setAvarageyht] = useState(0)

    const handleGoodClick = () => {
        setAll(allClicks +1)
        setGood(good +1)
        setAvarageyht(avarageyht + 1)
    }

    const handleNeutralClick = () => {
        setAll(allClicks +1)
        setNeutral(neutral +1)
    }

    const handleBadClick = () => {
        setAvarageyht(avarageyht -1)
        setAll(allClicks +1)
        setBad(bad +1)
    }


  return (
    <div>
      <h1>give feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} avarageyht={avarageyht}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
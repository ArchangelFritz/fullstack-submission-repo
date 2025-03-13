import { useState } from 'react'

const Statistic = (props) => {
return (
          <tr>
            <td>{props.text} {props.value}</td>
          </tr>)
        }

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={props.good}/>
          <Statistic text="neutral" value={props.neutral}/>
          <Statistic text="bad" value={props.bad}/>
          <Statistic text="all" value={props.good + props.neutral + props.bad}/>
          <Statistic text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
          <Statistic text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100 + '%'}/>
        </tbody>
      </table>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Average = (props) => {
    return (props.good - props.bad) / (props.good + props.neutral + props.bad)
  }

  

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {() => setGood(good + 1)}>good</button>
      <button onClick = {() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick = {() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>


    </div>
  )
}

export default App
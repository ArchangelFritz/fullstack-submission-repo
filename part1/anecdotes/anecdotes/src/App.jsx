import { useState } from 'react'

const UpdateVotes = (props) => {
  const copy = { ...props.votes };
  copy[props.selected] += 1;

  return (
    <div>
      <button onClick={() => props.onClick(copy)}> vote </button>
    </div>
  )
}


const GenerateRandomNumber = (props) => {
  const number = Math.floor(Math.random() * 7) + 1; // Generates a number between 1 and 100

  return ( <div>
    <button onClick={() => props.onClick(number)}> next anecdote </button>
  </div>)
};

const HighestScorer = (props) => {
  const [name, highest] = Object.entries(props.scores).reduce((max, entry) => entry[1] > max[1] ? entry : max);
  return <p>Highest Score: {props.anecdotes[name]} with {highest} votes</p>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0})
  const [selected, setSelected] = useState(0)


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <UpdateVotes votes={votes} selected={selected} onClick={setVotes}/>
      <GenerateRandomNumber onClick={setSelected}/>
      <h1>Anecdote with most votes</h1>
      <HighestScorer scores={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App
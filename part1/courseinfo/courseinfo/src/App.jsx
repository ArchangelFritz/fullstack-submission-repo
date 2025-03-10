const Header = (course) => {
  
  return (
    <div>
      <p>{course.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.title} count={props.exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.one + props.two + props.three}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.count}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course}/>
      <Content title={part1} exercises={exercises1}/>
      <Content title={part2} exercises={exercises2}/>
      <Content title={part3} exercises={exercises3}/>
      <Total one={exercises1} two={exercises2} three={exercises3}/>
    </div>
  )
}
export default App
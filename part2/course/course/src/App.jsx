import { useState } from 'react'
import Note from './components/Note'

const Part = (part) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum,part)  => sum + part.exercises, 0);
  return (
    <p>
    Total exercise in this course {total}
    </p>
  )
}

const Course = (course) => {
  course = course.course;
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const courses = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }

]

  return (
    <div>
      {courses.map((course) => <Course key={course.id} course={course} />)}
    </div>
  )
}

export default App
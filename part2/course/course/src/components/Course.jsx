
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

export default Course;
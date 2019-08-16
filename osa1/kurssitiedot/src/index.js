import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
  }

  const Header = (props) => {
      console.log(props)
    return (
        <div>
            <h1>
                {course.name}
            </h1>
        </div>
   
    )
}

const Content = (props) => {
    console.log(props)
    return (
      <div>
           <p>{course.parts[0].name} {course.parts[0].exercises}</p>
           <p>{course.parts[1].name} {course.parts[1].exercises}</p>
           <p>{course.parts[2].name} {course.parts[2].exercises}</p>
      </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exervices {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
        </div>
    )
}

  return (
    <div>
        <Header course={course} />
        <Content  course={course} />
        <Total course={course} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
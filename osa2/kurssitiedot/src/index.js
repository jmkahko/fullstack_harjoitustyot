import React from 'react'
import ReactDOM from 'react-dom'
import course from './course'


const App = () => {

  const Courses = ( {courses} ) => {
    console.log(courses)

   return (
       <div>
   

       </div>
   )
 
  }



  return (
    <div>
        <Courses courses={course} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
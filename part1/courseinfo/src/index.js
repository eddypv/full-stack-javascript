import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { part: part1, exercises:exercises1 },
    { part: part2, exercises:exercises2 },
    { part: part3, exercises:exercises3 },
  ];
  const listExercises =[exercises1, exercises2, exercises3]
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total exercises={listExercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
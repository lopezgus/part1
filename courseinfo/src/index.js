import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'


/* ------------------------- Ejercicio 1.5!!  ------------------------- */

const Content3 = ({arr}) =>{
  console.log(arr.parts)
  return(
    arr.parts.map(x=>{
      return (
        <p>
        Course: {x.name}, exercises: {x.exercises} 
        </p>
      )
    }) 
  )
}


const Totals3 = ({arr}) =>{
  let sum=0;
  arr.parts.forEach(x=> {
    return sum += x.exercises
  })
  return(
      <p>
       Ejercicios: {sum}
      </p>
  )
}

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

  return (
    <div>
      <h1> {course.name} </h1>
      <Content3 arr={course} />
      <Totals3 arr={course} />    
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

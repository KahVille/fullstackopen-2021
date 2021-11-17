import React from 'react';

const Part = ({part}) => {
  return(
    <div>
      <h2>{part.name}</h2>
      <p>{part.exercises}</p>
    </div>
  );
}

const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
  );
}

const Content = ({parts}) => {
  return(
   <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
   </div>
  );
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  );
}


const App = () => {
  
  //Contants
  const course = {
    name: 'Half stack application development',
    parts:
    [
      {
        name: 'Fundementals of React',
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
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  );
}

export default App;

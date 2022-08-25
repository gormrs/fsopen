const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  const Header = (props) => {
    return (
      <div>
        <h1>
          {props.course}
        </h1>
      </div>
    )
  }

  const Part = (props) =>{
    return (
      <div>
        {props.name} has {props.exercises} exercises
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part name={parts[0].name} exercises={parts[0].exercises}/>
        <Part name={parts[1].name} exercises={parts[1].exercises}/>
        <Part name={parts[2].name} exercises={parts[2].exercises}/>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>
          Total number of exercises are {parts[0].exercises + parts[1].exercises + parts[2].exercises}
        </p>
      </div>
    )
  }
    return (
      <div>
        <Header course={course}/>
        <Content/>
        <Total />
      </div>



    )

}


export default App 

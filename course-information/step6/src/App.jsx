const Header = (p) => {
  // console.log(p)
  return (
    <>
      <h1>{p.text}</h1>
    </>
  )
}

const Part = (p) => {
  // console.log(p)
  return (
    <>
    <p>
      {p.text} {p.exercises}
    </p>
    </>
  )
}


const Content = (p) => {
  console.log(p)
  return (
    <>
    {p.parts.map(part => <Part key={part.id} text={part.name} exercises={part.exercises}/>)}
    </>
  )
}

const Total = (p) => {
  // console.log(p)
  return (
    <>
    <p>Number of exercises {p.text}</p>
    </>
  )
}

const Course = (p) => {
  // console.log(p)
  const {parts, name} = p.course
  return (
    <>
      <Header text={name}/>
      <Content parts={parts}/>
    </>
  )
}

const App = () => {
  const course = {
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course}/>
}

export default App

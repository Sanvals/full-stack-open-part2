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
  // console.log(p)
  return (
    <>
    {p.parts.map(part => <Part key={part.id} text={part.name} exercises={part.exercises}/>)}
    </>
  )
}

const Total = (p) => {
  // console.log(p)
  const total = p.text.reduce((acc, curr) => acc + curr.exercises, 0)
  // console.log(total)
  return (
    <>
    <strong>total of {total} exercises</strong>
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
      <Total text={parts}/>
    </>
  )
}

const CourseLogger = ({subjects}) => {
  // console.log(subjects)
  return (
    <>
    {subjects.map(unit => <Course course={unit}/>)}
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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

  return <CourseLogger subjects={courses}/>
}

export default App

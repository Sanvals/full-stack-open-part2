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

  export default Course
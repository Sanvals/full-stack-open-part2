import { useState } from 'react'

const People = (p) => {
  // console.log(p)
  return (
    <>
    <div>{p.name}: {p.number}</div>
    </>
  )
}

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '999-999-999', id: 0}
  ])

  const handleInputChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
  
    if (persons.filter(p => p.name === newName).length == 0) {
      setPersons(persons.concat(nameObject))
    }

    else {
      window.alert(`${newName} is already added to the phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleInputChange}/>
        </div>
        <div>
          number: <input onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(item => <People key={item.id} name={item.name} number={item.number}/>)}
    </div>
  )
}

export default App
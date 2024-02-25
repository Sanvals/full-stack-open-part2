import { useState } from 'react'

const People = (p) => {
  console.log(p)
  return (
    <>
    <div>{p.name}</div>
    </>
  )
}

const App = () => {
  const [newName, setNewName] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const handleInputChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }

    setPersons(persons.concat(nameObject))
    console.log(persons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
                  onChange={handleInputChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(item => <People name={item.name}/>)}
    </div>
  )
}

export default App
import { useState } from 'react'

const People = ({id, name, number}) => {
  // console.log(id, name, number)
  return (
    <>
    <div>{name}: {number}</div>
    </>
  )
}

const FilteredPeople = ({content, search}) => {
  // console.log(content, search)
  const filteredArray = content.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
    {
    filteredArray.map(item => <People key={item.id} name={item.name} number={item.number}/>)
    }
    </>
  )
}

const NewInput = ({text, onChange}) => {
  // console.log(text, handler)
  return (
    <div>
      {text}: <input onChange={onChange}/>
    </div>
  )
}

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setNewSearch] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    // console.log(event.target.value)
    setNewSearch(event.target.value)
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
        <NewInput text="filter shown with" onChange={handleSearchChange}/>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <NewInput text="name" onChange={handleInputChange}/>
        <NewInput text="number" onChange={handleNumberChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <FilteredPeople content={persons} search={search}/>
    </div>
  )
}

export default App
import { useState, useEffect } from 'react'
import FilteredPeople from './components/FilteredPeople'
import NewInput from './components/NewInput'
import peopleService from './services/PeopleService'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setNewSearch] = useState('')
  const [persons, setPersons] = useState([])

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

      peopleService
        .create(nameObject)
        .then(res => {
          console.log(res)
        })
    }

    else {
      window.alert(`${newName} is already added to the phonebook`)
    }
  }

  useEffect(() => {
    peopleService
      .getPeople()
      .then(res => {
        setPersons(res.data)
      })
  }, [])

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
import { useState, useEffect } from 'react'
import FilteredPeople from './components/FilteredPeople'
import NewInput from './components/NewInput'
import peopleService from './services/PeopleService'
import Notification from './components/Notification'

const App = () => {
  const [errorMessage, setErrorMessage] = useState('Some Error...')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setNewSearch] = useState('')
  const [persons, setPersons] = useState([])

  const handleInputChange = (event) => {
    // console.log(event.target.value)
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

  const handleDelete = (idToDelete) => {
    peopleService.deletePerson(idToDelete)
    setPersons(persons.filter(p => p.id !== idToDelete))
    console.log(`Deleted person id ${idToDelete}`)
  }

  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }
  
    if (!persons.find(p => p.name === newName)) {
      setPersons(persons.concat(nameObject))

      peopleService
        .create(nameObject)
        .then(res => {
          // console.log(res)
          setErrorMessage(`${newName} has been successfully added`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 2000)
        })
    }

    else {
      if (window.confirm(`${newName} already exists on the database, overwrite number?`)) {
        peopleService
        .modifyPerson(persons.find(p => p.name === newName), newNumber)
        .then(res => {
          // console.log(res)
          setPersons(persons.map(p => p.name === newName ? { ...p, number: newNumber } : p))
          setErrorMessage(`${newName}'s number has been successfully changed`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 2000)  
        
        })
      }
    }
  }
  
  // Request the JSON data on load
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
        <Notification message={errorMessage}/>
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
        <FilteredPeople content={persons} search={search} onDelete={handleDelete}/>
    </div>
  )
}

export default App
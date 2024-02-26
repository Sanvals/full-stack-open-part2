import { useState, useEffect } from 'react'
import axios from 'axios'
import Result from './components/Result'
import ShowQuery from './components/ShowQuery'

function App() {
  const [search, setSearch] = useState('')
  const [fetch, setFetch] = useState([])
  const [numResults, setNumResults] = useState(0)

  // Catch all the countries and dump them into fetch state
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        setFetch(res.data)
        setNumResults(res.data.length)
      })
  }, [])

  const handleInputChange = (event) => {
    setSearch(event.target.value.toLowerCase())
    setNumResults(fetch.filter(c => c.name.common.toLowerCase().includes(event.target.value.toLowerCase())).length)
  }


  const deliverCountries = () => {
    if(numResults <= 10) {
      return fetch.filter(c => c.name.common.toLowerCase().includes(search))
    }

    else {
      return []
    }
  }


  return (
    <>
    <p>find countries: <input onChange={handleInputChange}/></p>
    {numResults == 0 && <>No matches</>}
    {numResults >= 11 && <>Too many matches</>}
    {numResults < 11 && numResults > 1 && deliverCountries().map(c => <Result key={c.name.common} name={c.name.common}/>)}
    {numResults === 1 && <ShowQuery info={deliverCountries()[0]}/>}
    </>
  )
}

export default App

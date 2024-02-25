import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPeople = () => {
    return axios.get(baseUrl)
}

const create = newPeople => {
    return axios.post(baseUrl, newPeople)
}

const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const modifyPerson = (person, newNumber) => {
    return axios.put(`${baseUrl}/${person.id}`, {...person, number: newNumber})
}

export default {
    getPeople: getPeople,
    create: create,
    deletePerson: deletePerson,
    modifyPerson: modifyPerson
}
import { useState } from 'react'
import Search from './components/Search'
import Display from './components/Display'
import Input from './components/Input'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', "id": 0 }
  ]) 
  const [rehook, setRehook] = useState(0)
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setFilteredPersons(response.data)
        setPersons(response.data)

      })
  }
  
  useEffect(hook, [rehook])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    console.log('Current persons:', persons)
    console.log('Current filteredPersons:', filteredPersons)
}, [persons, filteredPersons])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    const updatedPersons = persons.concat(personObject)
    setPersons(updatedPersons)
    
    // Apply current filter to the updated list
    const filtered = updatedPersons.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredPersons(filtered)
    
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm)
    const filtered = persons.filter(person =>
      person.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    )
    setFilteredPersons(filtered)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search persons={persons} onFilterChange={handleFilterChange} />
      <Input 
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <Display filteredPersons={filteredPersons} />
    </div>
  )
}

export default App
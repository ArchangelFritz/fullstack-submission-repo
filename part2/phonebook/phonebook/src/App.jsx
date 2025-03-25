import { useState } from 'react'
import Search from './components/Search'
import Display from './components/Display'
import Input from './components/Input'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', "id": 0 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [searchTerm, setSearchTerm] = useState('')
  
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
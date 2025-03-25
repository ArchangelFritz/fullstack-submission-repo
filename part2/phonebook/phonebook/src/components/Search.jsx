import { useState } from 'react'

const Search = ({ persons, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
    onFilterChange(newSearchTerm)
  }

  return (
    <div>
      filter shown with: <input value={searchTerm} onChange={handleSearchChange}/>
    </div>
  )
}

export default Search 
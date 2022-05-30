import React, {useState} from 'react'

const SearchBar = ({searchDbFor}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    searchDbFor(searchTerm.trim() || undefined)
    setSearchTerm(searchTerm.trim())
  }

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          id='searchTerm'
          name='searchTerm'
          placeholder='searchTerm'
          type='text'
          value={searchTerm}
          onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchBar
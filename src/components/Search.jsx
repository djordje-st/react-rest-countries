import React from 'react'

import IosSearch from 'react-ionicons/lib/IosSearch'

const Search = ({ handleChange }) => {
  return (
    <div className="search">
      <IosSearch />
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input onChange={e => handleChange(e)} placeholder="Search for a country..." type="text" name="search" id="search" />
    </div>
  )
}

export default Search

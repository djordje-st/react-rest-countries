import React from 'react'

const Select = ({ handleChange }) => {
  return (
    <React.Fragment>
      <label htmlFor="region" className="sr-only">
        Filter by Region
      </label>
      <select onChange={e => handleChange(e)} name="region" id="region">
        <option defaultValue selected disabled>
          Filter by Region
        </option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </React.Fragment>
  )
}

export default Select

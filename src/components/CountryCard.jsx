import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <div className='country'>
      <Link to={country.alpha3Code}>
        <img loading='lazy' src={country.flag} alt={country.name} />
        <div className='country__info'>
          <h2>{country.name}</h2>
          <p>Population: {formatNumber(country.population)}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard

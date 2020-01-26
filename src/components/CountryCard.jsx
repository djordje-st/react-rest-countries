import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
  return (
    <div className="country">
      <Link to={country.alpha3Code}>
        <img loading="lazy" src={country.flag} alt={country.name} />
        <div className="country__info">
          <h2>{country.name}</h2>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard

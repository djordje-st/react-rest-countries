import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import countries from 'i18n-iso-countries'

import { getCountry } from '../services/countryApi'

const Country = () => {
  const [country, setCountry] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getCountryPage = () => {
      getCountry(id).then(res => {
        setCountry(res.data)
      })
    }
    getCountryPage()

    countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
  }, [id])

  let languages = []
  let currencies = []
  let borders = []

  if (country.languages !== undefined) {
    languages = country.languages.map(language => language.name)
    currencies = country.currencies.map(currency => currency.name)
    borders = country.borders.map(border => {
      const borderName = countries.getName(border, 'en')
      return (
        <Link key={border} to={'/' + border}>
          {borderName}
        </Link>
      )
    })
  }

  return (
    <div className="countryPage">
      <button type="button">
        <Link to="/">&larr; Back</Link>
      </button>

      {country && <Helmet>
        <title>{`${country.name} | REST Countries`}</title>
      </Helmet>}

      <div className="countryPage__wrapper">
        <img className="countryPage__flag" src={country.flag} alt={country.name} />
        <div className="countryPage__info">
          <h1>{country.name}</h1>
          <div className="countryPage__info--details">
            <p>
              <span className="mdWeight">Native Name:</span> {country.nativeName}
            </p>
            <p>
              <span className="mdWeight"> Population:</span> {country.population}
            </p>
            <p>
              <span className="mdWeight"> Region:</span> {country.region}
            </p>
            <p>
              <span className="mdWeight"> Sub Region:</span> {country.subregion}
            </p>
            <p>
              <span className="mdWeight"> Capital:</span> {country.capital}
            </p>
            <p>
              <span className="mdWeight"> Top Level Domain:</span> {country.topLevelDomain}
            </p>
            <p>
              <span className="mdWeight"> Currencies:</span> {currencies.join(', ')}
            </p>
            <p>
              <span className="mdWeight"> Languages:</span> {languages.join(', ')}
            </p>
          </div>
          {borders.length > 1 && (
            <p className="countryPage__info--borders">
              <span className="mdWeight">Border Countries:</span> <span className="chip">{borders}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Country

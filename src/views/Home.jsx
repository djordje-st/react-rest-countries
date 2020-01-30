import React, { useState, useEffect } from 'react'

import { getAllCountries, getRegionCountries } from '../services/countryApi'

import CountryCard from '../components/CountryCard'
import Select from '../components/Select'
import Search from '../components/Search'
import Helmet from 'react-helmet'

const Home = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  const getAll = () => {
    const getCountries = async () => {
      const countries = await getAllCountries()
      setCountries(countries.data)
    }
    getCountries()
  }

  const getRegion = async e => {
    if (e.target.value === 'all') {
      getAll()
    } else {
      const region = await getRegionCountries(e.target.value)
      setCountries(region.data)
    }
  }

  const search = e => {
    if (e.target.value.length >= 3) {
      const result = countries.filter(country => !e.target.value || country.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setCountries(result)
    } else {
      getAll()
    }
  }

  const countryList = countries.map(country => <CountryCard key={country.alpha3Code} country={country} />)

  return (
    <div className="home">
      <Helmet>
        <title>REST Countries</title>
      </Helmet>

      <div className="home__utils">
        <Search handleChange={search} />
        <Select handleChange={getRegion} />
      </div>
      {countryList.length === 0 ? (
        <div className="home__countries">
          <h2>No countries found.</h2>
        </div>
      ) : (
        <div className="home__countries">{countryList}</div>
      )}
    </div>
  )
}

export default Home

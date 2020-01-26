import http from './config'

export const getAllCountries = () => {
  return http().get('/all')
}

export const getCountry = code => {
  return http().get(`/alpha/${code}`)
}

export const getRegionCountries = region => {
  return http().get(`/region/${region}`)
}

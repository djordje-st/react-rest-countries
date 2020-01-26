import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://restcountries.eu/rest/v2`
  })
}

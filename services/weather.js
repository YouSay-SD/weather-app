import { apiKey, defaultCountry } from '../utils/constants'
import { API } from './api'

const weatherService = {}

weatherService.getWeatherByCountry = async (countryName = defaultCountry) => {
  return await API.get(`/weather?q=${countryName}&appid=${apiKey}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err?.response?.data
    })
}

export default weatherService

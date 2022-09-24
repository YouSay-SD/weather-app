import { useContext, useEffect, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import weatherService from '../../../services/weather'
import { defaultCountry } from '../../../utils/constants'
import Searcher from '../../molecules/Searcher/Searcher'
import WeatherCard from '../../molecules/WeatherCard/WeatherCard'
import styles from '../Weather/Weather.module.scss'
import Container from '../../atoms/Container/Container'
import FavoriteList from '../../molecules/FavoriteList/FavoriteList'
import { StoreContext } from '../StoreProvider/StoreProvider'
import { types } from '../../../store/types'

const Weather = () => {
  const [store, dispatch] = useContext(StoreContext)
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState(null)
  const [countrySelected, setCountrySelected] = useState(defaultCountry)
  const [{ key }, handleInputChange] = useForm({
    key: defaultCountry,
  })

  console.log('store', store)

  useEffect(() => {
    dispatch({ type: types.GET_FAVORITES })
  }, [])

  useEffect(() => {
    getWeather()
  }, [])

  const onSubmit = (e) => {
    e?.preventDefault()
    getWeather(key)
  }

  const getWeather = async (country) => {
    try {
      setLoading(true)
      const resp = await weatherService.getWeatherByCountry(country)
      if (country) {
        setCountrySelected(country)
      }
      setWeather(resp)
    } catch (err) {
      console.log('err', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.weather}>
      <Container className={styles.container}>
        <FavoriteList getWeather={getWeather} />
        <Searcher onSubmit={onSubmit} keySearch={key} onChange={handleInputChange} />

        <WeatherCard
          name={weather?.name}
          countrySearched={countrySelected}
          weather={weather?.weather[0].main}
          temp={Math.round(weather?.main.temp).toString()}
          tempMax={Math.round(weather?.main.temp_max).toString()}
          tempMin={Math.round(weather?.main.temp_min).toString()}
          loading={loading}
        />
      </Container>
    </section>
  )
}

export default Weather

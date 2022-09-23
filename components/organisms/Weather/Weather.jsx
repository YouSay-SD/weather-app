import { useEffect, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import weatherService from '../../../services/weather'
import { defaultCountry } from '../../../utils/constants'
import Searcher from '../../molecules/Searcher/Searcher'
import WeatherCard from '../../molecules/WeatherCard/WeatherCard'
import styles from '../Weather/Weather.module.scss'
import Container from '../../atoms/Container/Container'

const Weather = () => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState(null)
  const [{ key }, handleInputChange] = useForm({
    key: defaultCountry,
  })

  useEffect(() => {
    getWeather()
  }, [])

  const getWeather = async (e) => {
    e?.preventDefault()
    try {
      setLoading(true)
      const resp = await weatherService.getWeatherByCountry(key)
      setWeather(resp)
      console.log('resp', resp)
    } catch (err) {
      console.log('err', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.weather}>
      <Container className={styles.container}>
        <Searcher onSubmit={getWeather} keySearch={key} onChange={handleInputChange} />

        <WeatherCard
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

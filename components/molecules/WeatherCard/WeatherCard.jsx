import styles from '../WeatherCard/WeatherCard.module.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Favorite from '../../atoms/Favorite/Favorite'
import RowInfoCard from '../../atoms/RowInfoCard/RowInfoCard'
import Title from '../../atoms/Title/Title'
import RowContentCard from '../../atoms/RowContentCard/RowContentCard'

const WeatherCard = ({ name, countrySearched, weather, temp, tempMax, tempMin, loading }) => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.topContainer}>
        <Favorite country={countrySearched} />
        <div className={styles.title}>
          {loading ? <Skeleton height={42} /> : <Title color="white">{name}</Title>}
        </div>
        <div className={styles.header}>
          <RowContentCard loading={loading} text={weather} />
          <RowContentCard loading={loading} text={`${temp}°`} />
        </div>
      </div>
      <RowInfoCard loading={loading} label="Temp max" value={`${tempMax}°`} />
      <RowInfoCard loading={loading} label="Temp min" value={`${tempMin}°`} />
    </div>
  )
}

export default WeatherCard

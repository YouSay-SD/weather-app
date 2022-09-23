import styles from '../WeatherCard/WeatherCard.module.scss'
import Image from 'next/image'
import P from '../../atoms/P/P'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const WeatherCard = ({ weather, temp, tempMax, tempMin, loading }) => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.imgContainer}>
        {!loading && (
          <div className={styles.header}>
            <P className={styles.temp} color="white" size="lg">
              {weather}
            </P>
            <P className={styles.temp} color="white" size="lg">
              {temp}
            </P>
          </div>
        )}

        {loading ? (
          <Skeleton className={styles.imgContainer} />
        ) : (
          <Image src="/assets/img/weather-card.png" alt="Weather" layout="fill" objectFit="cover" />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={`${styles.info} ${!loading && styles.row}`}>
          {loading ? (
            <Skeleton height={21} />
          ) : (
            <>
              <P>Temp max</P>
              <P>{tempMax}</P>
            </>
          )}
        </div>
        <div className={`${styles.info} ${!loading && styles.row}`}>
          {loading ? (
            <Skeleton height={21} />
          ) : (
            <>
              <P>Temp min</P>
              <P>{tempMin}</P>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default WeatherCard

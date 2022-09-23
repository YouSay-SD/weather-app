import styles from '../WeatherCard/WeatherCard.module.scss'
import Image from 'next/image'
import P from '../../atoms/P/P'
// import Title from '../../atoms/Title/Title'

const WeatherCard = ({ weather, temp, tempMax, tempMin }) => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.imgContainer}>
        <div className={styles.header}>
          <P className={styles.temp} color="white" size="lg">
            {weather}
          </P>
          <P className={styles.temp} color="white" size="lg">
            {temp}
          </P>
        </div>
        <Image src="/assets/img/weather-card.png" alt="Weather" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.infoRow}>
          <P>Temp max</P>
          <P>{tempMax}</P>
        </div>
        <div className={styles.infoRow}>
          <P>Temp min</P>
          <P>{tempMin}</P>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard

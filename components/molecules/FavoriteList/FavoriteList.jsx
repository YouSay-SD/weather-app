/* eslint-disable no-undef */
import { useContext } from 'react'
import P from '../../atoms/P/P'
import { StoreContext } from '../../organisms/StoreProvider/StoreProvider'
import styles from '../FavoriteList/FavoriteList.module.scss'

const FavoriteList = ({ getWeather }) => {
  const [{ favorites }] = useContext(StoreContext)

  const selectFavoriteCountry = async (favorite) => {
    getWeather(favorite)
  }

  return favorites.length ? (
    <div className={styles.favoriteList}>
      <P color="white">Favorites:</P>
      <ul className={styles.list}>
        {favorites?.map((favorite, index) => (
          <li key={index} onClick={() => selectFavoriteCountry(favorite)}>
            {favorite}
          </li>
        ))}
      </ul>
    </div>
  ) : null
}

export default FavoriteList

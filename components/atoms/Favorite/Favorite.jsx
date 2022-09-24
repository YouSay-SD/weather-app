/* eslint-disable no-undef */
import { useContext, useEffect, useState } from 'react'
import { types } from '../../../store/types'
import { StoreContext } from '../../organisms/StoreProvider/StoreProvider'
import styles from './Favorite.module.scss'

const Favorite = ({ country }) => {
  const [{ favorites }, dispatch] = useContext(StoreContext)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const setAsSaved = async () => {
      const countryFiltered = favorites.length
        ? favorites?.some((countryItem) => countryItem?.toLowerCase() === country?.toLowerCase())
        : null

      setSaved(countryFiltered)
    }

    setAsSaved()
  }, [country, favorites])

  const removeOrAddToFavorite = async () => {
    dispatch({
      type: saved ? types.REMOVE_FROM_FAVORITE : types.ADD_TO_FAVORITE,
      payload: country,
    })
  }

  return (
    <button
      className={`${styles.favorite} ${saved ? styles.saved : ''}`}
      onClick={removeOrAddToFavorite}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" version="1.0" y="0" x="0">
        <path
          id="path1713"
          d="m49.604 49.604l-16.32-5.534-13.811 10.306 0.221-17.231-14.07-9.95 16.456-5.115 5.115-16.456 9.95 14.07 17.231-0.221-10.306 13.811 5.534 16.32z"
        />
        <path
          id="polygon634"
          d="m49.604 49.604l-16.32-5.534-13.811 10.306 0.221-17.231-14.07-9.95 16.456-5.115 5.115-16.456 9.95 14.07 17.231-0.221-10.306 13.811 5.534 16.32z"
        />
      </svg>
    </button>
  )
}

export default Favorite

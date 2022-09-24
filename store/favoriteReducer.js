/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import { keyLocalStorage } from '../utils/constants'
import { types } from './types'

export const initialState = {
  favorites: [],
}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FAVORITES:
      const getFavorites = JSON.parse(localStorage.getItem(keyLocalStorage))
      return {
        favorites: getFavorites || [],
      }

    case types.ADD_TO_FAVORITE:
      const favoritesLocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage))

      const favorites = favoritesLocalStorage
        ? [...favoritesLocalStorage, action.payload]
        : [action.payload]

      localStorage.setItem(keyLocalStorage, JSON.stringify(favorites))

      return {
        favorites,
      }

    case types.REMOVE_FROM_FAVORITE:
      const itemsLocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage))

      const favoritesUpdated = itemsLocalStorage.filter(
        (item) => item.toLowerCase() !== action.payload.toLowerCase(),
      )
      localStorage.setItem(keyLocalStorage, JSON.stringify(favoritesUpdated))

      return {
        favorites: favoritesUpdated,
      }

    default:
      return state
  }
}

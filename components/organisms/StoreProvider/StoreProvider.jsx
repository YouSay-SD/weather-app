import { createContext, useReducer } from 'react'
import { favoriteReducer, initialState } from '../../../store/favoriteReducer'

export const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(favoriteReducer, initialState)

  return <StoreContext.Provider value={[store, dispatch]}>{children}</StoreContext.Provider>
}

export default StoreProvider

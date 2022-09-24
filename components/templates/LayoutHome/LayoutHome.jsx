import StoreProvider from '../../organisms/StoreProvider/StoreProvider'
import Weather from '../../organisms/Weather/Weather'

const LayoutHome = () => {
  return (
    <main>
      <StoreProvider>
        <Weather />
      </StoreProvider>
    </main>
  )
}

export default LayoutHome

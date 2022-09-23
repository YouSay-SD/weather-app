import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} key={router.asPath} />
}

export default MyApp

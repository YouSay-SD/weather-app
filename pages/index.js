import HeadSeo from '../components/templates/HeadSeo/HeadSeo'
import LayoutHome from '../components/templates/LayoutHome/LayoutHome'

export default function Home() {
  return (
    <>
      <HeadSeo title="Weather App" />
      <LayoutHome />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

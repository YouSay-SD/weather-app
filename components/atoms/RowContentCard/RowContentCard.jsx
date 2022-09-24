import Skeleton from 'react-loading-skeleton'
import P from '../P/P'

export const RowContentCard = ({ loading, text }) => {
  return loading ? (
    <Skeleton height={34} />
  ) : (
    <P color="white" size="lg">
      {text}
    </P>
  )
}

export default RowContentCard

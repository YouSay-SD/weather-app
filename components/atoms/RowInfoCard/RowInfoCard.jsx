import Skeleton from 'react-loading-skeleton'
import P from '../P/P'
import styles from './RowInfoCard.module.scss'

export const RowInfoCard = ({ loading, label, value }) => {
  return (
    <div className={`${styles.info} ${!loading && styles.row}`}>
      {loading ? (
        <Skeleton height={21} />
      ) : (
        <>
          <P color="white">{label}</P>
          <P color="white">{value}</P>
        </>
      )}
    </div>
  )
}

export default RowInfoCard

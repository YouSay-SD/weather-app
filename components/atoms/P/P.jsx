import styles from './P.module.scss'

const P = ({ children, className = '', color = 'secondary', size = 'sm', as = 'p' }) => {
  const PTag = as

  return (
    <PTag className={`${styles.p} ${styles[color]} ${styles[size]} ${className}`}>{children}</PTag>
  )
}

export default P

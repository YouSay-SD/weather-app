import styles from './Title.module.scss'

const Title = ({ as = 'h2', size = 'md', color = 'secondary', className = '', children }) => {
  const HTag = as

  return (
    <HTag className={`${styles.title} ${styles[size]} ${styles[color]} ${className}`}>
      {children}
    </HTag>
  )
}

export default Title

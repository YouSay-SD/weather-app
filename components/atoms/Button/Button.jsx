import styles from './Button.module.scss'

const Button = ({ type = 'solid', color = 'primary', children, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[type]} ${styles[color]}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

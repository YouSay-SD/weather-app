import styles from '../Searcher/Searcher.module.scss'

const Searcher = ({ onSubmit, keySearch, onChange }) => {
  return (
    <form onSubmit={onSubmit} className={styles.searcher}>
      <input
        className={styles.input}
        type="text"
        placeholder="Country..."
        name="key"
        value={keySearch}
        onChange={onChange}
        autoComplete="off"
      />
    </form>
  )
}

export default Searcher

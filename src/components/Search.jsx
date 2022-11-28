import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Navigate } from 'react-router-dom';
import styles from './Search.module.css'

const Search = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquisar"
        aria-label='Pesquisar'
        onChange={handleChange}
        value={value} />
      <button type="submit"><AiOutlineSearch /></button>
    </form>
  )
}

export default Search
import React from 'react'
import styles from './style.module.scss'
import { moon, sun } from '@/shared/media'

const ThemeSwitch = ({ themes, setThemes }) => {
  const toggleTheme = () => {
    setThemes(themes === 'LIGHT' ? 'DARK' : 'LIGHT')
  }
  return (
    <button type='button' onClick={toggleTheme} className={styles.Switch}>
      {themes === 'DARK' ? (
        <img style={{ width: '30px', height: '30px' }} src={moon} alt='' />
      ) : (
        <img style={{ width: '30px', height: '30px' }} src={sun} alt='' />
      )}
    </button>
  )
}

export default ThemeSwitch

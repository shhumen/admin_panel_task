import React from 'react'
import styles from './style.module.scss'

function Card({ children }) {
  return (
    <div className={`${styles.Card} col-6 col-lg-6 col-md-6 col-sm-6`}>
      {/* <div className='card-header'>
      </div>
      <div className='card-body'></div> */}
      {children}
    </div>
  )
}

export default Card

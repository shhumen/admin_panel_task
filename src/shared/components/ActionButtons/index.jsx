import React from 'react'
import { Button } from 'antd'
import styles from '@/styles/table.module.scss'

const ActionButtons = ({ actions, icons, handleAction, record }) => {
  console.log(record, 'from action')
  return (
    <>
      {actions.map((action, index) => (
        <Button
          key={action}
          className={styles[action]}
          onClick={() => handleAction(action, record)}
        >
          {action === 'delete' ? (
            <img src={icons[index]} alt={action} />
          ) : (
            <img src={icons[index]} alt={action} />
          )}
        </Button>
      ))}
    </>
  )
}

export default ActionButtons

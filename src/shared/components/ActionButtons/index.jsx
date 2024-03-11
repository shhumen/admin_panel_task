import React from 'react'
import { Button } from 'antd'
import styles from '@/styles/table.module.scss'
import { checkRoles } from '../CheckRoles'

const ActionButtons = ({ role, actions, icons, handleAction, record }) => {
  const { checkHead, checkAdmin, checkSuperAdmin } = checkRoles(role)

  return (
    <>
      {actions.map((action, index) => (
        <Button
          key={action}
          className={styles[action]}
          onClick={() => handleAction(action, record)}
          disabled={checkHead && action !== 'view'}
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

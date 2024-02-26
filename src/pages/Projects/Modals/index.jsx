import React from 'react'
import Edit from './Edit'
import View from './View'

const Modals = ({ isOpen, setOpen, actionType }) => {
  const teamsActions = {
    view: <View isOpen={isOpen} setOpen={setOpen} actionType={actionType} />,
    edit: <Edit isOpen={isOpen} setOpen={setOpen} actionType={actionType} />,
  }

  return teamsActions[actionType] || null
}
export default Modals

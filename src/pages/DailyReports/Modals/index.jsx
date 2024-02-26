import React from 'react'
import View from './View'
import Edit from './Edit'

const ReportsModal = ({ isOpen, setOpen, actionType }) => {
  const teamsActions = {
    view: <View isOpen={isOpen} setOpen={setOpen} />,
    update: <Edit isOpen={isOpen} setOpen={setOpen} />,
  }
  return teamsActions[actionType?.type]
}
export default ReportsModal

import React from 'react'
import View from './View'
import Edit from './Edit'

const ReportsModal = ({ isOpen, setOpen, actionType, checkEmployee, role }) => {
  const teamsActions = {
    view: (
      <View
        isOpen={isOpen}
        setOpen={setOpen}
        actionType={actionType}
        checkEmployee={checkEmployee}
      />
    ),
    edit: (
      <Edit
        isOpen={isOpen}
        setOpen={setOpen}
        role={role}
        actionType={actionType}
      />
    ),
  }
  return teamsActions[actionType?.type] || null
}
export default ReportsModal

import React from 'react'
import View from './View'
import Edit from './Edit'
import ResetPasswordModal from '@/shared/components/ResetPasswordModal'
import DeleteModal from '@/shared/components/DeleteModal'

const EmplyoeeModal = ({
  isOpen,
  setOpen,
  actionType,
  entityname,
  onDelete,
}) => {
  const teamsActions = {
    view: <View isOpen={isOpen} setOpen={setOpen} actionType={actionType} />,
    edit: <Edit isOpen={isOpen} actionType={actionType} setOpen={setOpen} />,
    delete: (
      <DeleteModal
        entityname={entityname}
        onDelete={onDelete}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    ),
    resetPassword: (
      <ResetPasswordModal
        isOpen={isOpen}
        actionType={actionType}
        setOpen={setOpen}
      />
    ),
  }
  return teamsActions[actionType?.type] || null
}
export default EmplyoeeModal

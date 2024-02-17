import React from 'react'
import View from './View'
import Edit from './Edit'
import ResetPasswordModal from '@/shared/components/ResetPasswordModal'
import DeleteModal from '@/shared/components/DeleteModal'

const EmplyoeeModal = ({ isOpen, setOpen, actionType }) => {
  const teamsActions = {
    view: <View isOpen={isOpen} setOpen={setOpen} />,
    update: <Edit isOpen={isOpen} setOpen={setOpen} />,
    delete: <DeleteModal isOpen={isOpen} setOpen={setOpen} />,
    resetPassword: <ResetPasswordModal isOpen={isOpen} setOpen={setOpen} />,
  }
  return teamsActions[actionType]
}
export default EmplyoeeModal

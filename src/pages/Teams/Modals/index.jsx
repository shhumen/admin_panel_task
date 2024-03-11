import React from 'react'
import DeleteModal from '@/shared/components/DeleteModal'
import { View } from './View'
import Edit from '../../Teams/Modals/Edit'

const Modals = ({ isOpen, setOpen, actionType, entityname, onDelete }) => {
  const teamsActions = {
    view: <View isOpen={isOpen} setOpen={setOpen} actionType={actionType} />,
    edit: <Edit isOpen={isOpen} setOpen={setOpen} actionType={actionType} />,
    delete: (
      <DeleteModal
        entityname={entityname}
        onDelete={onDelete}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    ),
  }
  return teamsActions[actionType?.type] || null
}
export default Modals

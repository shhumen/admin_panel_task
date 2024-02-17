import { Divider, List, Modal, Typography } from 'antd'
import React from 'react'
import DeleteModal from '@/shared/components/DeleteModal'
import ResetPasswordEditForm from '@/shared/components/Forms/ResetPasswordEditForm'
import TeamsEditForm from '@/shared/components/Forms/TeamsForms/TeamsEditForm'
import ViewDrawer from '@/shared/components/ViewDrawer'
import { ProjectUsersDataSource } from '@/shared/custom/utils'
import { View } from './View'
const { Title, Text, Paragraph } = Typography

const Modals = ({ isOpen, setOpen, actionType }) => {
  const teamsActions = {
    view: <View isOpen={isOpen} setOpen={setOpen} />,
    update: (
      <Modal
        title='Edit modal'
        centered
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <TeamsEditForm />
      </Modal>
    ),
    delete: <DeleteModal isOpen={isOpen} setOpen={setOpen} />,
  }
  return teamsActions[actionType]
}
export default Modals

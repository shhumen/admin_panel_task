import { Divider, Drawer, List, Modal, Space, Typography } from 'antd'
import React from 'react'
import DeleteModal from '@/shared/components/DeleteModal'
import ResetPasswordForm from '@/shared/components/Forms/ResetPasswordForm'
import ViewDrawer from '@/shared/components/ViewDrawer'
import { ProjectDataSource } from '@/shared/custom/utils'
import { ProjectUsersDataSource } from '../../../shared/custom/utils'
const { Title, Text, Paragraph } = Typography

const TeamsModal = ({ isOpen, setOpen, actionType }) => {
  const teamsActions = {
    view: (
      <ViewDrawer isOpen={isOpen} setOpen={setOpen}>
        Teams
      </ViewDrawer>
    ),

    update: (
      <Modal
        title='Edit modal'
        centered
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        {/* <EmployeeForm /> */}
      </Modal>
    ),
    delete: <DeleteModal isOpen={isOpen} setOpen={setOpen} />,

    resetPassword: (
      <Modal
        title='ResetPassword modal'
        centered
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <ResetPasswordForm />
      </Modal>
    ),
  }
  return teamsActions[actionType]
}
export default TeamsModal

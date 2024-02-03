import { Divider, Drawer, Modal } from 'antd'
import React from 'react'
import EmployeeForm from '@/shared/components/Forms/EmployeeForm'
import DeleteModal from '@/shared/components/DeleteModal'
import ResetPasswordForm from '@/shared/components/Forms/ResetPasswordForm'
import ViewDrawer from '@/shared/components/ViewDrawer'

const EmplyoeeModal = ({ isOpen, setOpen, actionType }) => {
  const teamsActions = {
    view: (
      <ViewDrawer isOpen={isOpen} setOpen={setOpen}>
        <p>Name : John</p>
        <Divider />
        <p>Surname : Doe</p>
        <Divider />
        <p>Mail : john.doe@example.com</p>
        <Divider />
        <p>Status : active</p>
        <Divider />
        <p>Teams : Frontend</p>
        <Divider />
        <p>Role : admin</p>
        <Divider />
        <p>Projects : Furniro , Plast , DashDark X</p>
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
        <EmployeeForm />
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
export default EmplyoeeModal

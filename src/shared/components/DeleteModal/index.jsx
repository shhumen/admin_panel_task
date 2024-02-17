import { Button, Modal, Space, Typography } from 'antd'
const { Title } = Typography
import React from 'react'

const DeleteModal = ({ isOpen, setOpen }) => {
  return (
    <Modal
      title='Are you sure to delete ?'
      centered
      open={isOpen}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      okText='Delete'
      okButtonProps={{ className: 'delete' }}
    >
      <Space />

      <Title level={5}>
        Do you really want to delete these records? This process can not be
        undone.
      </Title>
    </Modal>
  )
}

export default DeleteModal

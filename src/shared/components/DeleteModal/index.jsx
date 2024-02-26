import { Button, Modal, Space, Typography } from 'antd'
import React from 'react'

const { Title } = Typography

const DeleteModal = ({ isOpen, setOpen, entityname, onDelete }) => {
  console.log(entityname)
  const handleDelete = () => {
    onDelete()
    console.log('delete')
    setOpen(false)
  }

  return (
    <Modal
      title={`Are you sure to delete ${entityname}?`}
      centered
      open={isOpen}
      onOk={handleDelete}
      onCancel={() => setOpen(false)}
      okText='Delete'
      cancelButtonProps={{ className: 'cancel' }}
      okButtonProps={{ className: 'delete' }}
    >
      <Space />
      <Title level={5}>
        Do you really want to delete this {entityname}? This process cannot be
        undone.
      </Title>
    </Modal>
  )
}

export default DeleteModal

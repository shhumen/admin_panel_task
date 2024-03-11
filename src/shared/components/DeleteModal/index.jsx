import { Button, Modal, Space, Typography } from 'antd'
import Paragraph from 'antd/es/skeleton/Paragraph'
import React from 'react'

const { Title } = Typography

const DeleteModal = ({ isOpen, setOpen, entityname, onDelete }) => {
  const handleDelete = () => {
    onDelete()
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
      <p className='delete_modal_body'>
        Do you really want to delete this {entityname}? This process cannot be
        undone.
      </p>
    </Modal>
  )
}

export default DeleteModal

import React from 'react'
import { Modal } from 'antd'

function EditModal({ isOpen, setOpen, children }) {
  return (
    <Modal
      title='Edit modal'
      centered
      open={isOpen}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      okButtonProps={{ className: 'edit' }}
      okText='Edit'
    >
      {children}
    </Modal>
  )
}

export default EditModal

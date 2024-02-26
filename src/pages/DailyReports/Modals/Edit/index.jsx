import { Modal } from 'antd'
import React from 'react'

const Edit = ({ isOpen, setOpen }) => {
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
      SALAM
    </Modal>
  )
}

export default Edit

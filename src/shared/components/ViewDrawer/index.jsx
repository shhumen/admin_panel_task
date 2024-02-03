import { Divider, Drawer } from 'antd'
import React from 'react'

function ViewDrawer({ children, isOpen, setOpen }) {
  return (
    <Drawer
      title='View'
      onOk={() => setOpen(false)}
      onClose={() => setOpen(false)}
      open={isOpen}
      centered
    >
      {children}
    </Drawer>
  )
}

export default ViewDrawer

import { Divider, Drawer } from 'antd'
import React from 'react'

const View = ({ isOpen, setOpen }) => {
  return (
    <Drawer
      title='View'
      onOk={() => setOpen(false)}
      onClose={() => setOpen(false)}
      open={isOpen}
      centered
    >
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
    </Drawer>
  )
}

export default View

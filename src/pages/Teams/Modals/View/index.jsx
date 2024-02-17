import { Divider, Drawer, List } from 'antd'
import Title from 'antd/es/skeleton/Title'
import React from 'react'

export const View = ({ isOpen, setOpen }) => {
  return (
    <Drawer
      onOk={() => setOpen(false)}
      onClose={() => setOpen(false)}
      open={isOpen}
      centered
    >
      <>
        <Title level={4}>Frontend</Title>
        <Divider orientation='left'>Teams</Divider>
        <List
          itemLayout='horizontal'
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description='Lorem ipsum dolor sit amet.'
              />
            </List.Item>
          )}
        />
      </>
    </Drawer>
  )
}

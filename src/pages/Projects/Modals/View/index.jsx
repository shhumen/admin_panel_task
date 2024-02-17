import { Divider, Drawer, List, Space } from 'antd'
import Title from 'antd/es/skeleton/Title'
import React from 'react'
import { ProjectUsersDataSource } from '@/shared/custom/utils'

function View({ isOpen, setOpen }) {
  return (
    <Drawer
      title='View'
      onOk={() => setOpen(false)}
      onClose={() => setOpen(false)}
      open={isOpen}
      centered
    >
      <>
        <Title level={4}>Furniro</Title>
        <Space />
        <Divider orientation='left'>Employees</Divider>
        <List
          itemLayout='horizontal'
          dataSource={ProjectUsersDataSource}
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

export default View

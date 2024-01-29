import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'

const Header_ = ({ collapsed, setCollapsed }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fff',
          borderRadius: 2,
          colorBgContainer: '#fff',
        },
      }}
    >
      <Header style={{ padding: '0' }}>
        <Button
          type='primary'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            color: '#000',
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
    </ConfigProvider>
  )
}

export default Header_

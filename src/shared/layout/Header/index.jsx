import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Layout, Menu, Switch } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import styles from './style.module.scss'
import lock from '@/shared/media/imgs/lock.svg'

const Header_ = ({ collapsed, setCollapsed }) => {
  const [theme, setTheme] = useState('dark')
  const [current, setCurrent] = useState('1')
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light')
  }
  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorprimary: '#fff',
          borderRadius: 2,
          colorBgContainer: '#fff',
        },
      }}
    >
      <Header className={styles.header} style={{ padding: '0' }}>
        <Button
          type='primary-dark'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            color: '#000',
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren='Dark'
          unCheckedChildren='Light'
        />
        <div className={styles.account}>
          <div className={styles.name}>Mehdiyeva Shumen</div>
          <div className={styles.private}>
            <img src={lock} alt='lock' />
          </div>
        </div>
      </Header>
    </ConfigProvider>
  )
}

export default Header_

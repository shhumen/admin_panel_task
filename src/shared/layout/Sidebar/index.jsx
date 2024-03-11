import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FileOutlined,
  ProjectOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
const { Sider } = Layout
import home from '@/shared/media/imgs/Home.svg'
import Logo from '@/shared/media/imgs/crocusoft_logo.png'
import styles from './style.module.scss'

const Sidebar = ({ collapsed, user }) => {
  const location = useLocation()
  const role = user?.role?.roleEnum

  const Items =
    role === 'EMPLOYEE'
      ? [
          {
            label: <Link to='/'>Reports</Link>,
            key: '/reports',
            icon: <FileOutlined />,
          },
        ]
      : [
          {
            label: <Link to='/'>Dashboard</Link>,
            key: '/',
            icon: <img src={home} alt='Dashboard' />,
          },
          {
            label: <Link to='/users'>Employees</Link>,
            key: '/users',
            icon: <UserOutlined />,
          },
          {
            label: <Link to='/teams'>Teams</Link>,
            key: '/teams',
            icon: <TeamOutlined />,
          },
          {
            label: <Link to='/projects'>Projects</Link>,
            key: '/projects',
            icon: <ProjectOutlined />,
          },
          {
            label: <Link to='/reports'>Reports</Link>,
            key: '/reports',
            icon: <FileOutlined />,
          },
        ]

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        className={`demo-logo-vertical ${styles.sidebar_logo_wrapper}`}
        mode='inline'
      >
        <img src={Logo} alt='logo' />
        <p> Crocusoft</p>
      </div>
      <Menu
        mode='inline'
        defaultSelectedKeys={[location.pathname]}
        selectedKeys={[location.pathname]}
        items={Items}
      />
    </Sider>
  )
}

export default Sidebar

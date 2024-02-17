import React from 'react'
import { Layout, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { Items } from '@/shared/custom/utils'
import Logo from '@/shared/media/imgs/crocusoft_logo.png'
import Logout from '@/shared/media/imgs/logout.svg'
import styles from './style.module.scss'
import { useDispatch } from 'react-redux'
import { logout } from '@/redux/features/auth/authSlice'
const { Sider } = Layout

const Sidebar = ({ collapsed }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        className={`demo-logo-vertical ${styles.sidebar_logo_wrapper}`}
        mode='inline'
      >
        <img src={Logo} alt='logo' />
        <p> Crocusoft</p>
      </div>
      <Menu mode='inline' items={Items} selectedKeys={[location.pathname]} />
      <button className={styles.logout} onClick={handleLogout}>
        <img src={Logout} alt='logout' />
      </button>
    </Sider>
  )
}

export default Sidebar

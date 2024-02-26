import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import {
  Button,
  ConfigProvider,
  Dropdown,
  Layout,
  Menu,
  Switch,
  Tooltip,
} from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import styles from './style.module.scss'
// import lock from '@/shared/media/imgs/lock.svg'
import lockLight from '@/shared/media/imgs/lock_light.svg'
import lockDark from '@/shared/media/imgs/lock_dark.svg'
import moon from '@/shared/media/imgs/moon.svg'
import sun from '@/shared/media/imgs/sun.svg'
import Logout from '@/shared/media/imgs/logout.svg'
import avatarHeader from '@/shared/media/imgs/avatarHeader.svg'
import ChangePassword from '../../components/ChangePassword'
import { logout } from '../../../redux/features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import ThemeSwitch from '../../components/themeSwitcher'
const Header_ = ({ collapsed, setCollapsed, themes, setThemes, user }) => {
  console.log(user)
  const [modalOpen, setModalOpen] = useState(false)
  const [current, setCurrent] = useState('1')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    toast.success('Logged out')
    navigate('/')
  }

  const items = [
    {
      key: '1',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          Logout
        </a>
      ),
    },
  ]
  const onClick = (e) => {
    console.log('click ', e)

    setCurrent(e.key)
  }
  return (
    <ConfigProvider>
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
        <ThemeSwitch themes={themes} setThemes={setThemes} />
        <div className={styles.account}>
          <Tooltip placement='bottom' title={`${user.name} ${user.surname}`}>
            <div className={styles.user}>
              <img src={avatarHeader} alt='avatar' />
            </div>
          </Tooltip>
          <div className={styles.name}>
            <Button className={styles.logout} onClick={handleLogout}>
              <img src={Logout} alt='logout' />
            </Button>
          </div>
          <div className={styles.private}>
            <button onClick={() => setModalOpen(true)}>
              {themes === 'DARK' ? (
                <img src={lockLight} alt='lock_light' />
              ) : (
                <img src={lockDark} alt='lock_light' />
              )}
            </button>
          </div>
        </div>
      </Header>
      <ChangePassword modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </ConfigProvider>
  )
}

export default Header_

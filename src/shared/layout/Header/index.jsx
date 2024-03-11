import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Tooltip } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import styles from './style.module.scss'
import { lockLight, lockDark, Logout, avatarHeader } from '@/shared/media'
import ChangePassword from '@/shared/components/ChangePassword'
import { logout } from '@/redux/features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import ThemeSwitch from '@/shared/components/themeSwitcher'
import { useModal } from '@/hooks'
const Header_ = ({ collapsed, setCollapsed, themes, setThemes, user }) => {
  const { isOpen, setOpen } = useModal()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    toast.success('Logged out')
    navigate('/')
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
            <Link to='/profile'>
              <div className={styles.user}>
                <img src={avatarHeader} alt='avatar' />
              </div>
            </Link>
          </Tooltip>
          <div className={styles.name}>
            <Button className={styles.logout} onClick={handleLogout}>
              <img src={Logout} alt='logout' />
            </Button>
          </div>
          <div className={styles.private}>
            <button onClick={() => setOpen(true)}>
              {themes === 'DARK' ? (
                <img src={lockLight} alt='lock_light' />
              ) : (
                <img src={lockDark} alt='lock_light' />
              )}
            </button>
          </div>
        </div>
      </Header>
      <ChangePassword isOpen={isOpen} setOpen={setOpen} />
    </ConfigProvider>
  )
}

export default Header_

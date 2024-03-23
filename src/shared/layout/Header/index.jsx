import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Button, ConfigProvider, Popconfirm, Tooltip } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import styles from './style.module.scss'
import {
  lockLight,
  lockDark,
  logoutLight,
  logoutDark,
  avatarHeaderLight,
  avatarHeaderDark,
} from '@/shared/media'
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
                <img
                  src={themes === 'DARK' ? avatarHeaderLight : avatarHeaderDark}
                  alt='avatar'
                />
              </div>
            </Link>
          </Tooltip>
          <div className={styles.name}>
            <Popconfirm
              onConfirm={handleLogout}
              title='Logout'
              description='Are you sure to logout?'
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              okText='Yes'
              okButtonProps={{ className: 'warning' }}
              cancelButtonProps={{ className: 'cancel' }}
              cancelText='No'
            >
              {/* onClick={handleLogout} */}
              <Button className={styles.logout}>
                <Tooltip placement='bottom' title='Logout'>
                  <img
                    src={themes === 'DARK' ? logoutLight : logoutDark}
                    alt='logout'
                  />
                </Tooltip>
              </Button>
            </Popconfirm>
          </div>
          <div className={styles.private}>
            <button onClick={() => setOpen(true)}>
              <img
                src={themes === 'DARK' ? lockLight : lockDark}
                alt='avatar'
              />
            </button>
          </div>
        </div>
      </Header>
      <ChangePassword isOpen={isOpen} setOpen={setOpen} />
    </ConfigProvider>
  )
}

export default Header_

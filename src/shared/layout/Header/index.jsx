import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Dropdown, Layout, Menu, Switch } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import styles from './style.module.scss'
// import lock from '@/shared/media/imgs/lock.svg'
import lockLight from '@/shared/media/imgs/lock_light.svg'
import lockDark from '@/shared/media/imgs/lock_dark.svg'
import moon from '@/shared/media/imgs/moon.svg'
import sun from '@/shared/media/imgs/sun.svg'
import avatarHeader from '@/shared/media/imgs/avatarHeader.svg'
import ChangePassword from '../../components/ChangePassword'
import { logout } from '../../../redux/features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Header_ = ({ collapsed, setCollapsed, themes, setThemes }) => {
  console.log(logout, 'from login logiot')
  const [modalOpen, setModalOpen] = useState(false)
  const [current, setCurrent] = useState('1')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const changeTheme = () => {
    setThemes(themes === 'LIGHT' ? 'DARK' : 'LIGHT')
  }

  const handleLogout = () => {
    dispatch(logout())
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
        <button onClick={changeTheme} className={styles.Switch}>
          {themes === 'DARK' ? (
            <img style={{ width: '30px', height: '30px' }} src={moon} alt='' />
          ) : (
            <img style={{ width: '30px', height: '30px' }} src={sun} alt='' />
          )}
        </button>
        <div className={styles.account}>
          <div className={styles.user}>
            <img src={avatarHeader} alt='avatar' />
          </div>
          <div className={styles.name}>
            <Dropdown
              menu={{
                items,
              }}
              placement='bottomLeft'
            >
              <Button className={styles.Button}>
                <p>Mehdiyeva Shumen</p>
              </Button>
            </Dropdown>
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

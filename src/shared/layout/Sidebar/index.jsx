import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
const { Sider } = Layout
import { Items } from '@/shared/custom/utils'
import Logo from '@/shared/media/imgs/logo.svg'
import styles from './style.module.scss'

const Sidebar = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        className={`demo-logo-vertical ${styles.sidebar_logo_wrapper}`}
        mode='inline'
      >
        <img src={Logo} alt='' />
        <p> Dashdark X</p>
      </div>
      <Menu mode='inline' items={Items} />
    </Sider>
  )
}

export default Sidebar

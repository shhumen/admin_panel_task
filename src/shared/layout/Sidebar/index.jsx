/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Items } from '@/shared/custom/utils'
import Logo from '@/shared/media/imgs/logo.svg'
// import { styles } from '../Sidebar/style.module.scss'
const { Sider, Content } = Layout
import styles from './style.module.scss'

const Sidebar = ({ collapsed }) => {
  return (
    <Sider
      // className={styles.Sidebar}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
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

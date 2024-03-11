import { AntDesignOutlined } from '@ant-design/icons'
import { Avatar, Col, Descriptions, Divider, Flex } from 'antd'
import React from 'react'
import styles from './style.module.scss'

const Profile = ({ user }) => {
  return (
    <Flex className={styles.profile}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <h4>Profile Information</h4>
        <div className={styles.user}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <p>Name: {user.name}</p>
        <Divider />
        <p>Surname : {user.surname}</p>
        <Divider />
        <p>Email : {user.email}</p>
        <Divider />
        <p>Role : {user?.role?.roleEnum.toLowerCase()}</p>
      </Col>
    </Flex>
  )
}

export default Profile

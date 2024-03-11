import React from 'react'

import { Divider, Drawer, Spin, Typography } from 'antd'
const { Title, Paragraph } = Typography

import { useGetUserByIdQuery } from '@/redux/api/user'

const View = ({ isOpen, setOpen, actionType }) => {
  const userId = actionType?.userId
  const { data: userDetails, isLoading, isError } = useGetUserByIdQuery(userId)

  return (
    <Drawer
      open={isOpen}
      onClose={() => setOpen(false)}
      placement='right'
      width={400}
      destroyOnClose
    >
      <>
        {userId === undefined ? <p>Undefined user </p> : ''}
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <Spin size='large' />
            <Paragraph>Loading user details...</Paragraph>
          </div>
        ) : isError ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <Title level={4}>Error</Title>
            <Paragraph>Failed to load user details.</Paragraph>
          </div>
        ) : (
          <>
            <h4>Employee Information</h4>
            <Divider />
            <p>Name: {userDetails?.name}</p>
            <Divider />
            <p>Surname: {userDetails?.surname}</p>
            <Divider />
            <p>Mail: {userDetails?.email}</p>
            <Divider />
            <p>Status: {userDetails?.status}</p>
            <Divider />
            <p>Teams: {userDetails?.team?.name}</p>
            <Divider />
            <p>Role: {userDetails?.role?.roleEnum}</p>
            <Divider />

            <p>
              Projects: <br />
            </p>
            {userDetails?.project?.length > 0 ? (
              <ul>
                {userDetails?.project?.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </>
        )}
      </>
    </Drawer>
  )
}

export default View

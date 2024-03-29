import React from 'react'
import { Avatar, Divider, Drawer, Spin, Tooltip } from 'antd'
import { useGetProjectByIdQuery } from '@/redux/api/projects'
import Paragraph from 'antd/es/skeleton/Paragraph'
import Title from 'antd/es/skeleton/Title'

const View = ({ isOpen, setOpen, actionType }) => {
  const projectId = actionType?.projectId
  const {
    data: projectDetails,
    isLoading,
    isError,
  } = useGetProjectByIdQuery(projectId)

  return (
    <Drawer onClose={() => setOpen(!isOpen)} open={isOpen} centered>
      <>
        {projectId === undefined ? (
          <p>Undefined Project </p>
        ) : isLoading ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <Spin size='large' />
            <Paragraph>Loading Project details...</Paragraph>
          </div>
        ) : isError ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <Title level={4}>Error</Title>
            <Paragraph>Failed to load Project details.</Paragraph>
          </div>
        ) : (
          <>
            <h4>Project Information</h4>
            <Divider />
            <p>Project name: {projectDetails?.name}</p>
            <Divider />
            {projectDetails?.employees?.length > 0 ? (
              <>
                <p>Members: </p>
                {projectDetails?.employees?.map((member, index) => (
                  <Avatar.Group key={index}>
                    <Tooltip
                      title={`${member.name} ${member.surname}`}
                      key={member.name}
                    >
                      <Avatar
                        style={{
                          marginRight: 8,
                          backgroundColor: 'var(--secondary-color-two)',
                        }}
                      >
                        {member.name[0]}
                      </Avatar>
                    </Tooltip>
                  </Avatar.Group>
                ))}
              </>
            ) : (
              <>
                <p>Members: There are no members yet</p>
              </>
            )}
          </>
        )}
      </>
    </Drawer>
  )
}

export default View

import { Avatar, Divider, Drawer, List, Spin, Tooltip } from 'antd'
import Title from 'antd/es/skeleton/Title'
import React from 'react'
import { useGetTeamsByIdQuery } from '@/redux/api/teams'
import Paragraph from 'antd/es/skeleton/Paragraph'

export const View = ({ isOpen, setOpen, actionType }) => {
  const teamId = actionType?.teamId
  const { data: teamDetails, isLoading, isError } = useGetTeamsByIdQuery(teamId)
  return (
    <Drawer onClose={() => setOpen(false)} open={isOpen} centered>
      <>
        {teamId === undefined ? <p>Undefined Team </p> : ''}
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <Spin size='large' />
          </div>
        ) : isError ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <Title level={4}>Error</Title>
            <Paragraph>Failed to load Team details.</Paragraph>
          </div>
        ) : (
          <>
            <h4>Team Information</h4>
            <Divider />
            <p>Team name: {teamDetails?.name}</p>
            <Divider />

            {teamDetails?.members?.length > 0 ? (
              <>
                <p>Members: </p>
                {teamDetails.members.map((member, index) => (
                  <Avatar.Group>
                    <Tooltip title={member.name} key={member.name}>
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
              <p>There are no members yet</p>
            )}
          </>
        )}
      </>
    </Drawer>
  )
}

import { Divider, Drawer, List, Spin } from 'antd'
import Title from 'antd/es/skeleton/Title'
import React from 'react'
import { useGetReportsByIdQuery } from '@/redux/api/reports'
import { useGetUserByIdQuery } from '@/redux/api/user'
import Paragraph from 'antd/es/skeleton/Paragraph'

const View = ({ isOpen, setOpen, actionType, checkEmployee }) => {
  const reportId = actionType?.reportId

  const {
    data: reportsById,
    isLoading,
    isSuccess,
    isError,
  } = useGetReportsByIdQuery(reportId)

  // uncompleted
  // const { data: userDetails } =
  //   reportsById === 'undefined' ? [] : useGetUserByIdQuery(reportsById?.id)

  return (
    <Drawer onClose={() => setOpen(false)} open={isOpen} centered>
      <>
        {reportId === undefined ? <p>Undefined Report</p> : ''}
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <Spin size='large' />
          </div>
        ) : isError ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <Title level={4}>Error</Title>
            <Paragraph>Failed to load Report details.</Paragraph>
          </div>
        ) : (
          <>
            <h4>Report Information</h4>
            <Divider />

            <p>
              Description :
              <span
                className='desc_view'
                dangerouslySetInnerHTML={{ __html: reportsById?.description }}
              />
            </p>
            <Divider style={{ margin: '7px' }} />
            {reportsById?.project && (
              <>
                <p>Project Name : {reportsById?.project?.name}</p>
              </>
            )}
            <Divider style={{ margin: '7px' }} />
            {/* {!checkEmployee && userDetails && (
              <>
                <p>Employee Name :</p>
                <p>
                  {userDetails?.name} {userDetails?.surname}
                </p>
              </>
            )} */}
          </>
        )}
      </>
    </Drawer>
  )
}

export default View

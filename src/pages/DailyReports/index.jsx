import React, { useState } from 'react'
import { Button, Table, Tag } from 'antd'
import styles from '@/styles/table.module.scss'
import { EmployeesDataSource, ReportsDataSource } from '@/shared/custom/utils'
import EmployeeModal from '@/pages/Employee/EmployeeModal'

const DailyReports = () => {
  const [isOpen, setOpen] = useState(false)
  const [actionType, setActionType] = useState('view')
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 2,
    },
  })

  const ReportsColumns = [
    {
      title: 'Employee',
      dataIndex: 'employee',
      key: 'employee',
    },
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
  ]

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    })
  }

  return (
    <>
      <EmployeeModal
        actionType={actionType}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <Table
        className={styles.table}
        columns={ReportsColumns}
        title={() => 'All Reports'}
        dataSource={ReportsDataSource}
        onChange={handleTableChange}
      />
    </>
  )
}

export default DailyReports

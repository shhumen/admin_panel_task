import React, { useState } from 'react'
import { Button, Table } from 'antd'
import styles from '@/styles/table.module.scss'
import { ReportsDataSource } from '@/shared/custom/utils'
import ReportsModal from './Modals'
import viewBtn from '@/shared/media/imgs/view.svg'
import editBtn from '@/shared/media/imgs/edit.svg'
import deleteBtn from '@/shared/media/imgs/delete.svg'
import keyBtn from '@/shared/media/imgs/key.svg'
import Create from './Modals/Create'

const DailyReports = () => {
  const [modal2Open, setModal2Open] = useState(false)
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
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, { actions }) => (
        <>
          {actions.map((action) => (
            <Button
              key={action}
              className={action === 'view' ? styles.view : styles.edit}
              onClick={() => {
                switch (action) {
                  case 'view':
                    setOpen(!isOpen)
                    setActionType('view')
                    break
                  case 'edit':
                    setOpen(!isOpen)
                    setActionType('update')
                    break
                }
              }}
            >
              {action === 'view' && <img src={viewBtn} alt='view' />}
              {action === 'edit' && <img src={editBtn} alt='edit' />}
            </Button>
          ))}
        </>
      ),
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
      <ReportsModal actionType={actionType} isOpen={isOpen} setOpen={setOpen} />
      <div className='buttons'>
        {/* <Filter modal1Open={modal1Open} setModal1Open={setModal1Open} /> */}
        <br />
        <Create modal2Open={modal2Open} setModal2Open={setModal2Open} />
      </div>
      <Table
        className={styles.table}
        columns={ReportsColumns}
        title={() => (
          <div className={styles.table_header}>
            <p className='title'>All Employees</p>
          </div>
        )}
        dataSource={ReportsDataSource}
        onChange={handleTableChange}
        rowKey='user_id'
      />
    </>
  )
}

export default DailyReports

import React, { useState } from 'react'
import { Button, Table, Tag } from 'antd'
import styles from '@/styles/table.module.scss'
import viewBtn from '@/shared/media/imgs/view.svg'
import editBtn from '@/shared/media/imgs/edit.svg'
import deleteBtn from '@/shared/media/imgs/delete.svg'
import keyBtn from '@/shared/media/imgs/key.svg'
import { EmployeesDataSource } from '@/shared/custom/utils'
import Modals from '@/pages/Employee/Modals'
import Create from './Modals/Create'
import Filter from './Modals/Filter'
import { useGetUsersQuery } from '@/redux/api/user'

const Employee = () => {
  const [isOpen, setOpen] = useState(false)
  const [actionType, setActionType] = useState('view')
  const [modal1Open, setModal1Open] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })
  const { data } = useGetUsersQuery()
  console.log(data, 'EMployedeyem')

  const EmployeesColumns = [
    {
      title: 'Name',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'Surname',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => {
        let className = status === 'active' ? 'active' : 'deactive'
        return (
          <Tag
            className={className === 'active' ? styles.active : styles.deactive}
            key={status}
          >
            {status}
          </Tag>
        )
      },
    },
    {
      title: 'Teams',
      dataIndex: 'teams',
      key: 'teams',
    },
    {
      title: 'Roles',
      dataIndex: 'roles',
      key: 'roles',
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
              className={
                action === 'view'
                  ? styles.view
                  : action === 'edit'
                  ? styles.edit
                  : action === 'delete'
                  ? styles.delete
                  : styles.resetPassword
              }
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
                  case 'delete':
                    setOpen(!isOpen)
                    setActionType('delete')
                    break
                  case 'resetPassword':
                    setOpen(!isOpen)
                    setActionType('resetPassword')
                    break
                }
              }}
            >
              {action === 'view' && <img src={viewBtn} alt='view' />}
              {action === 'edit' && <img src={editBtn} alt='edit' />}
              {action === 'delete' && <img src={deleteBtn} alt='deleteBtn' />}
              {action === 'resetPassword' && <img src={keyBtn} alt='key' />}
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
      <Modals actionType={actionType} isOpen={isOpen} setOpen={setOpen} />
      <Table
        className={styles.table}
        columns={EmployeesColumns}
        title={() => {
          return (
            <div className={styles.table_header}>
              <p className='title'>All Employees</p>
              <div className='buttons'>
                <Filter modal1Open={modal1Open} setModal1Open={setModal1Open} />
                <br />
                <Create modal2Open={modal2Open} setModal2Open={setModal2Open} />
              </div>
            </div>
          )
        }}
        dataSource={EmployeesDataSource}
        onChange={handleTableChange}
      />
    </>
  )
}

export default Employee

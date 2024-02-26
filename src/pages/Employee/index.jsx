import React, { useEffect, useMemo, useState } from 'react'
import { Table } from 'antd'
import {
  useGetUsersQuery,
  useChangeStatusMutation,
  useCreateUserMutation,
  useDeleteUserMutation,
} from '@/redux/api/user'
import { useModal } from '@/hooks'
import Modals from '@/pages/Employee/Modals'
import Filter from './Modals/Filter'
import Create from './Modals/Create'
import ActionButtons from '@/shared/components/ActionButtons'
import { ActionTypes } from '@/shared/constants/actionTypes'
import { viewBtn, editBtn, deleteBtn, keyBtn } from '@/shared/media'
import styles from '@/styles/table.module.scss'

const Employee = () => {
  const { data } = useGetUsersQuery()
  const [deleteUser] = useDeleteUserMutation()
  const [changeStatus] = useChangeStatusMutation()
  const { isOpen, setOpen, openModal, closeModal } = useModal()
  const [actionType, setActionType] = useState(null)
  const [modalState, setModalState] = useState({
    filter: false,
    create: false,
  })
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  })

  const actions = ['view', 'edit', 'delete', 'resetPassword']
  const icons = [viewBtn, editBtn, deleteBtn, keyBtn]

  const updateData = useMemo(() => {
    return data?.map((item) => ({
      fullname: item?.fullname,
      email: item?.email,
      teamName: item?.teamName,
      status: item?.status,
      role: item?.role,
      key: item?.user_id,
    }))
  }, [data])

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    })
  }

  const handleAction = (action, record) => {
    const actionConfig = {
      [ActionTypes.VIEW]: { type: ActionTypes.VIEW },
      [ActionTypes.EDIT]: { type: ActionTypes.EDIT },
      [ActionTypes.DELETE]: { type: ActionTypes.DELETE },
      [ActionTypes.RESET_PASSWORD]: { type: ActionTypes.RESET_PASSWORD },
    }

    const config = actionConfig[action]
    if (config) {
      setOpen(true)
      setActionType({
        ...config,
        userId: record?.key,
      })
    }
  }
  const handleDeleteEmployee = async () => {
    await deleteUser(actionType?.userId)
  }
  const handleChangeStatus = async ({ user_id, currentStatus }) => {
    const newStatus = currentStatus === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
    await changeStatus({ user_id, status: newStatus })
  }

  const EmployeesColumns = (handleAction) => [
    {
      title: 'Full Name',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Team',
      dataIndex: 'teamName',
      key: 'teamName',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => (
        <span
          onClick={() =>
            handleChangeStatus({ user_id: record.key, currentStatus: text })
          }
          className={text === 'ACTIVE' ? styles.active : styles.deactive}
        >
          {text}
        </span>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (text) => <span className={styles.role}>{text}</span>,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <ActionButtons
          actions={actions}
          icons={icons}
          handleAction={handleAction}
          record={record}
        />
      ),
    },
  ]

  return (
    <>
      <Modals
        entityname='employee'
        onDelete={handleDeleteEmployee}
        actionType={actionType}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <div className='buttons'>
        <Filter
          modalOpen={modalState.filter}
          setModalOpen={(isOpen) =>
            setModalState((prevState) => ({
              ...prevState,
              filter: isOpen,
            }))
          }
        />
        <br />
        <Create
          modalOpen={modalState.create}
          setModalOpen={(isOpen) =>
            setModalState((prevState) => ({
              ...prevState,
              create: isOpen,
            }))
          }
        />
      </div>
      <Table
        className={styles.table}
        columns={EmployeesColumns(handleAction)}
        title={() => {
          ;<div className={styles.table_header}>
            <p className='title'>All Employees</p>
          </div>
        }}
        dataSource={updateData}
        onChange={handleTableChange}
        pagination={{
          ...tableParams.pagination,
          pageSizeOptions: [1, 2, 3, 4],
        }}
      />
    </>
  )
}

export default Employee

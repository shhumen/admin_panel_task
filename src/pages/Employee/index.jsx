import React, { useMemo, useState } from 'react'
import { Layout, Table } from 'antd'
import {
  useChangeStatusMutation,
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
import { useUserFilterQuery } from '@/redux/api/user'
import CustomPagination from '@/shared/components/Pagination'
import { checkRoles } from '@/shared/components/CheckRoles'

const Employee = ({ role }) => {
  const { checkHead } = checkRoles(role)
  const {
    isOpen,
    setOpen,
    modalState,
    setModalState,
    handlePageChange,
    openModal,
    pageState,
  } = useModal()

  const [actionType, setActionType] = useState(null)
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectIds: null,
    teamIds: null,
  })
  const actions = ['view', 'edit', 'delete', 'resetPassword']
  const icons = [viewBtn, editBtn, deleteBtn, keyBtn]

  // mutations
  const [deleteUser] = useDeleteUserMutation()
  const [changeStatus] = useChangeStatusMutation()

  // queries
  const { data: usersFilter } = useUserFilterQuery({
    page: pageState.current,
    pageSize: pageState.pageSize,
    ...user,
  })

  const updatedData = useMemo(() => {
    return usersFilter?.content
      ?.map((item) => ({
        name: item?.name,
        surname: item?.surname,
        email: item?.email,
        team: item?.team?.name,
        status: item?.status,
        role: item?.role?.roleEnum,
        key: item?.id,
      }))
      .filter(
        (user) =>
          user.role !== role &&
          user.role !== 'SUPERADMIN' &&
          user.role !== 'HEAD'
      )
  }, [usersFilter])

  const handleAction = (action, record) => {
    const actionConfig = {
      // {"view" :{type:"view"}}

      [ActionTypes.VIEW]: { type: ActionTypes.VIEW },
      [ActionTypes.EDIT]: { type: ActionTypes.EDIT },
      [ActionTypes.DELETE]: { type: ActionTypes.DELETE },
      [ActionTypes.RESET_PASSWORD]: { type: ActionTypes.RESET_PASSWORD },
    }

    console.log(actionConfig, 'config action')

    const config = actionConfig[action]
    if (config) {
      openModal()
      setActionType({
        ...config,
        userId: record?.key,
      })
    }
  }
  console.log(actionType, 'action type')

  const handleDeleteEmployee = async () => {
    await deleteUser(actionType?.userId)
  }

  const handleChangeStatus = async ({ user_id, currentStatus }) => {
    const newStatus = currentStatus === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
    !checkHead && (await changeStatus({ user_id, status: newStatus }))
  }

  const EmployeesColumns = (handleAction) => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: ' Surname',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Team',
      dataIndex: 'team',
      key: 'team',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => (
        <button
          style={{ cursor: 'pointer' }}
          onClick={() =>
            handleChangeStatus({ user_id: record.key, currentStatus: text })
          }
          className={text === 'ACTIVE' ? styles.active : styles.deactive}
        >
          {text}
        </button>
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
          role={role}
          actions={actions}
          icons={icons}
          handleAction={handleAction}
          record={record}
        />
      ),
    },
  ]

  return (
    <Layout className='employee'>
      <Modals
        entityname='employee'
        onDelete={handleDeleteEmployee}
        actionType={actionType}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <div className='buttons'>
        <Filter
          setUser={setUser}
          modalOpen={modalState.filter}
          setModalOpen={(isOpen) =>
            setModalState((prevState) => ({
              ...prevState,
              filter: isOpen,
            }))
          }
        />
        {!checkHead && (
          <Create
            modalOpen={modalState.create}
            setModalOpen={(isOpen) =>
              setModalState((prevState) => ({
                ...prevState,
                create: isOpen,
              }))
            }
          />
        )}
      </div>
      <Table
        className={styles.table}
        columns={EmployeesColumns(handleAction)}
        title={() => (
          <div className={styles.table_header}>
            <p className='title'>All Employees</p>
          </div>
        )}
        dataSource={updatedData}
        pagination={false}
      />
      <CustomPagination
        totalElements={usersFilter?.TotalElements || 1}
        pageSize={pageState.pageSize}
        currentPage={pageState.current}
        onPageChange={handlePageChange}
      />
    </Layout>
  )
}

export default Employee

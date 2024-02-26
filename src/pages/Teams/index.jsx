import React, { useMemo, useState } from 'react'
import { useGetTeamsQuery, useDeleteTeamMutation } from '@/redux/api/teams'
import { Table } from 'antd'
import { useModal } from '@/hooks'
import Modals from './Modals'
import { Create } from './Modals/Create'
import ActionButtons from '@/shared/components/ActionButtons'
import { viewBtn, editBtn, deleteBtn } from '@/shared/media'
import styles from '@/styles/table.module.scss'

function Teams() {
  const { data: teams } = useGetTeamsQuery() || []
  const [deleteTeam] = useDeleteTeamMutation()

  const { isOpen, setOpen, openModal, closeModal } = useModal()

  const [actionType, setActionType] = useState(null)

  const [modalState, setModalState] = useState({
    filter: false,
    create: false,
  })
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })

  const actions = ['view', 'edit', 'delete']
  const icons = [viewBtn, editBtn, deleteBtn]

  const updateData = useMemo(() => {
    return teams?.map((item) => ({
      name: item?.name,
      key: item?.team_id,
    }))
  }, [teams])

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    })
  }

  const ActionTypes = {
    VIEW: 'view',
    EDIT: 'edit',
    DELETE: 'delete',
    RESET_PASSWORD: 'resetPassword',
  }

  const handleAction = (action, record) => {
    const actionConfig = {
      [ActionTypes.VIEW]: { type: ActionTypes.VIEW },
      [ActionTypes.EDIT]: { type: ActionTypes.EDIT },
      [ActionTypes.DELETE]: { type: ActionTypes.DELETE },
    }

    const config = actionConfig[action]
    if (config) {
      setOpen(true)
      setActionType({
        ...config,
        teamId: record?.key,
      })
    }
  }

  const handleDeleteTeam = async () => {
    await deleteTeam(actionType?.teamId)
  }

  const TeamsColumns = (handleAction) => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
        entityname='team'
        onDelete={handleDeleteTeam}
        actionType={actionType}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <div className='buttons'>
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
        className={styles.Teams}
        columns={TeamsColumns(handleAction)}
        title={() => (
          <div className={styles.table_header}>
            <p className='title'>All Teams</p>
          </div>
        )}
        dataSource={updateData}
        onChange={handleTableChange}
        pagination={{
          ...tableParams.pagination,
        }}
      />
    </>
  )
}

export default Teams

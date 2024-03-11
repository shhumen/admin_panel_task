import React, { useMemo, useState } from 'react'
import { Table } from 'antd'
import styles from '@/styles/table.module.scss'
import { viewBtn, editBtn } from '@/shared/media'
import Modals from './Modals'
import Create from './Modals/Create'
import Filter from './Modals/Filter'
import { useGetProjectsQuery } from '@/redux/api/projects'
import ActionButtons from '@/shared/components/ActionButtons'
import { ActionTypes } from '@/shared/constants/actionTypes'
import { useModal } from '@/hooks'

function Projects({ role }) {
  const {
    isOpen,
    setOpen,
    pageState,
    setPageState,
    tableParams,
    setTableParams,
    modalState,
    setModalState,
  } = useModal()
  const [projectName, setProjectName] = useState('')
  const { data: projects } = useGetProjectsQuery({
    page: pageState.current,
    projectName: projectName,
  })

  console.log(projects)
  const [actionType, setActionType] = useState(null)

  const updateData = useMemo(() => {
    return projects?.content?.map((project) => ({
      name: project?.name,
      key: project?.project_id,
    }))
  }, [projects])
  const handleTableChange = (pagination, filters, total, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    })
  }

  const actions = ['view', 'edit']
  const icons = [viewBtn, editBtn]

  const handleAction = (action, record) => {
    const actionConfig = {
      [ActionTypes.VIEW]: { type: ActionTypes.VIEW },
      [ActionTypes.EDIT]: { type: ActionTypes.EDIT },
    }

    const config = actionConfig[action]
    if (config) {
      setOpen(true)
      setActionType({
        ...config,
        projectId: record?.key,
      })
    }
  }

  const ProjectColumns = (handleAction) => [
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
    <>
      <Modals actionType={actionType} isOpen={isOpen} setOpen={setOpen} />
      <div className='buttons'>
        <Filter
          setProjectName={setProjectName}
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
        columns={ProjectColumns(handleAction)}
        title={() => (
          <div className={styles.table_header}>
            <p className='title'>All Projects</p>
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

export default Projects

import React, { useMemo, useState } from 'react'
import { Table } from 'antd'
import styles from '@/styles/table.module.scss'
import { viewBtn, editBtn } from '@/shared/media'
import Modals from './Modals'
import Create from './Modals/Create'
import Filter from './Modals/Filter'
import { useGetProjectsQuery } from '@/redux/api/projects'
import ActionButtons from '@/shared/components/ActionButtons'
import { useModal } from '@/hooks'

function Projects() {
  const { isOpen, setOpen, openModal, closeModal } = useModal()
  const [modalState, setModalState] = useState({
    filter: false,
    create: false,
  })
  const [pageState, setPageState] = useState({
    current: 1,
    pageSize: 3,
  })
  const { data: projects } = useGetProjectsQuery({
    page: pageState.current,
    pageSize: pageState.pageSize,
  })
  const [actionType, setActionType] = useState(null)
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: pageState.current,
      pageSize: pageState.pageSize,
    },
  })
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
      // total: projects,
    })
  }
  const ActionTypes = {
    VIEW: 'view',
    EDIT: 'edit',
  }
  const actions = ['view', 'edit']
  const icons = [viewBtn, editBtn]

  const handleAction = (action, record) => {
    console.log(record)
    const actionConfig = {
      [ActionTypes.VIEW]: { type: ActionTypes.VIEW },
      [ActionTypes.EDIT]: { type: ActionTypes.EDIT },
    }

    const config = actionConfig[action]
    if (config) {
      console.log(isOpen)
      setOpen(true)
      setActionType({
        ...config,
        projectId: record?.key,
      })
      console.log(actionType, 'from handle')
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
          actions={actions}
          icons={icons}
          handleAction={handleAction}
          record={record}
        />
      ),
    },
  ]

  // const ProjectColumns = (handleAction) => [
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     key: 'name',
  //   },
  //   {
  //     title: 'Actions',
  //     dataIndex: 'actions',
  //     key: 'actions',
  //     render: (_, record) => (
  //       <ActionButtons
  //         actions={actions}
  //         icons={icons}
  //         handleAction={handleAction}
  //         record={record}
  //       />
  //     ),
  //   },
  // ]

  return (
    <>
      <Modals actionType={actionType} isOpen={isOpen} setOpen={setOpen} />
      <div className='buttons'>
        <Filter
          modalOpen={modalState.create}
          setModalOpen={(isOpen) =>
            setModalState((prevState) => ({
              ...prevState,
              create: isOpen,
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

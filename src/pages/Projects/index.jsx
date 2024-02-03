import React, { useState } from 'react'
import { Button, Table } from 'antd'
import { ProjectDataSource } from '@/shared/custom/utils'
import styles from '@/styles/table.module.scss'
import viewBtn from '@/shared/media/imgs/view.svg'
import editBtn from '@/shared/media/imgs/edit.svg'
import deleteBtn from '@/shared/media/imgs/delete.svg'
import createBtn from '@/shared/media/imgs/create.svg'
import ProjectsModal from './ProjectsModal'

function Projects() {
  const [isOpen, setOpen] = useState(false)
  const [actionType, setActionType] = useState('view')
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    })
  }

  const ProjectColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
                  : styles.delete
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
                  case 'update':
                    setOpen(!isOpen)
                    setActionType('update')
                    break
                  case 'delete':
                    setOpen(!isOpen)
                    setActionType('delete')
                    break
                }
              }}
            >
              {action === 'view' && <img src={viewBtn} alt='view' />}
              {action === 'edit' && <img src={editBtn} alt='edit' />}
              {action === 'delete' && <img src={deleteBtn} alt='deleteBtn' />}
            </Button>
          ))}
        </>
      ),
    },
  ]
  return (
    <>
      <ProjectsModal
        actionType={actionType}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <Table
        columns={ProjectColumns}
        title={() => 'All Projects'}
        dataSource={ProjectDataSource}
        onChange={handleTableChange}
      />
    </>
  )
}

export default Projects

import React, { useState } from 'react'
import { Button, Table } from 'antd'
import { ProjectDataSource } from '@/shared/custom/utils'
import styles from '@/styles/table.module.scss'
import viewBtn from '@/shared/media/imgs/view.svg'
import editBtn from '@/shared/media/imgs/edit.svg'
import deleteBtn from '@/shared/media/imgs/delete.svg'
import createBtn from '@/shared/media/imgs/create.svg'
import Modals from './Modals'
// import FilterModal from '../../shared/components/FilterModal'
import { useLocation } from 'react-router-dom'
import Create from './Modals/Create'
import Filter from './Modals/Filter'

function Projects() {
  const [isOpen, setOpen] = useState(false)
  const [actionType, setActionType] = useState('view')
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 3,
      pageSize: 2,
    },
  })
  const [modal1Open, setModal1Open] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)
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
      <Modals actionType={actionType} isOpen={isOpen} setOpen={setOpen} />

      {/* <FilterModal pathname={pathname} /> */}
      {/* <div className='buttons'>
        <Filter modal1Open={modal1Open} setModal1Open={setModal1Open} />
        <br />
        <Create modal2Open={modal2Open} setModal2Open={setModal2Open} />
      </div> */}
      <Table
        columns={ProjectColumns}
        title={() => {
          return (
            <div className={styles.table_header}>
              <p className='title'>All Projects</p>
              <div className='buttons'>
                <Filter modal1Open={modal1Open} setModal1Open={setModal1Open} />
                <br />
                <Create modal2Open={modal2Open} setModal2Open={setModal2Open} />
              </div>
            </div>
          )
        }}
        dataSource={ProjectDataSource}
        onChange={handleTableChange}
        pagination={{
          ...tableParams.pagination,
        }}
      />
    </>
  )
}

export default Projects

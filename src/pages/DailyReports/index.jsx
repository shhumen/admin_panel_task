import React, { useMemo, useState } from 'react'
import styles from '@/styles/table.module.scss'
import { Button, Table } from 'antd'
import {
  useGetAdminReportsQuery,
  useGetReportsQuery,
} from '@/redux/api/reports'
import ReportsModal from './Modals'
import Create from './Modals/Create'
import Filter from './Modals/Filter'
import { viewBtn, editBtn } from '@/shared/media'
import ActionButtons from '@/shared/components/ActionButtons'
import { checkRoles } from '@/shared/components/CheckRoles'
import CustomPagination from '@/shared/components/Pagination'
import { ActionTypes } from '@/shared/constants/actionTypes'
import { useGetFilterExportReportQuery } from '@/redux/api/reports'
import { useModal } from '@/hooks'
import { toast } from 'sonner'

const DailyReports = ({ role }) => {
  const { checkSuperAdmin, checkHead, checkAdmin, checkEmployee } =
    checkRoles(role)
  const {
    isOpen,
    setOpen,
    pageState,
    modalState,
    setModalState,
    handlePageChange,
  } = useModal()

  const [values, setValues] = useState({
    projectIds: [],
    userIds: [],
    startDate: null,
    endDate: null,
  })
  const [actionType, setActionType] = useState(null)

  const { data: getFilterExportReport } =
    !checkEmployee &&
    useGetFilterExportReportQuery({
      page: pageState.current,
      pageSize: pageState.pageSize,
      ...values,
    })

  const actions = ['view', 'edit']
  const icons = [viewBtn, editBtn]

  const checkedReportQuery = useMemo(() => {
    return !checkEmployee ? useGetAdminReportsQuery : useGetReportsQuery
  }, [checkAdmin, checkHead, checkSuperAdmin])

  const { data: reports } = checkedReportQuery({
    page: pageState.current,
    pageSize: pageState.pageSize,
    ...values,
  })

  const updateData = useMemo(() => {
    return reports?.content?.map((item) => ({
      createDate: item?.creatDate,
      description: item?.description,
      project: item?.project?.name,
      user: item?.user?.name,
      key: item?.id,
    }))
  }, [reports, role])

  const handleExcel = () => {
    if (getFilterExportReport) {
      const blob = new Blob([getFilterExportReport], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      })
      const url = window.URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = 'filtered_reports.xls'
      document.body.appendChild(anchor)
      anchor.click()
      window.URL.revokeObjectURL(url)
    }
    return
  }

  const handleAction = (action, record) => {
    if (checkEmployee && action === ActionTypes.EDIT) {
      const creationDate = new Date(record.createDate)
      const currentDate = new Date()
      const isSameDay = creationDate.getDate() === currentDate.getDate()
      if (!isSameDay) {
        toast.error("You can't edit reports created more than one day ago.")
        return
      }
    }
    setOpen(true)
    setActionType({ type: action, reportId: record?.key })
  }

  const ReportsColumns = (handleAction) => {
    const columns = [
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        render: (text, record) => (
          <div className='desc' dangerouslySetInnerHTML={{ __html: text }} />
        ),
      },
      {
        title: 'Create Date',
        dataIndex: 'createDate',
        key: 'createDate',
      },
      {
        title: 'Project',
        dataIndex: 'project',
        key: 'project',
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

    if (!checkEmployee) {
      columns.splice(0, 0, {
        title: 'Employee',
        dataIndex: 'user',
        key: 'user',
      })
    }

    return columns
  }

  return (
    <>
      <ReportsModal
        role={role}
        checkEmployee={checkEmployee}
        actionType={actionType}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <div className='buttons'>
        <br />
        {!checkEmployee && <Button onClick={handleExcel}>Export</Button>}
        <Filter
          values={values}
          setValues={setValues}
          checkEmployee={checkEmployee}
          modalOpen={modalState.filter}
          setModalOpen={(isOpen) =>
            setModalState((prevState) => ({
              ...prevState,
              filter: isOpen,
            }))
          }
        />
        {checkEmployee && (
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
        columns={ReportsColumns(handleAction)}
        title={() => (
          <div className={styles.table_header}>
            <p className='title'>All Reports</p>
          </div>
        )}
        dataSource={updateData}
        rowKey='user_id'
        pagination={false}
      />
      <CustomPagination
        totalElements={reports?.TotalElements || 1}
        pageSize={pageState.pageSize}
        currentPage={pageState.current}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default DailyReports

import React, { useState } from 'react'
import { useGetUsersQuery } from '@/redux/api/user'
import { useGetProjectsQuery } from '@/redux/api/projects'
import { useModal } from '@/hooks'
import { Button, Divider, Drawer, Flex, Select } from 'antd'
import { DatePicker } from 'antd'
import filter from '@/shared/media/imgs/filter.svg'
const { RangePicker } = DatePicker

const Filter = ({
  checkEmployee,
  modalOpen,
  setModalOpen,
  setValues,
  values,
}) => {
  const { pageState } = useModal()
  const [projectName, setProjectName] = useState('')
  const { data: projects } = useGetProjectsQuery({
    page: pageState.current,
    projectName: projectName,
  })

  const { data: users } = !checkEmployee && useGetUsersQuery()

  const onSubmit = () => {
    setModalOpen(false)
  }

  const reset = () => {
    setValues({
      ...values,
      projectIds: [],
      userIds: [],
    })
    setModalOpen(false)
  }

  return (
    <>
      <button
        className='filter_btn'
        type='primary'
        onClick={() => setModalOpen(true)}
      >
        <img src={filter} alt='filter' />
      </button>
      <Drawer
        centered
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        okButtonProps={{ className: 'filter' }}
        okText='Filter'
      >
        <Flex vertical>
          <Select
            mode='multiple'
            placeholder='Projects'
            options={projects?.content?.map((project) => ({
              value: project?.project_id,
              label: project?.name,
            }))}
            onChange={(value) =>
              setValues((prev) => ({
                ...prev,
                projectIds: value,
              }))
            }
            value={values.projectIds}
          />
          <Divider style={{ margin: '7px' }} />
          {!checkEmployee && (
            <Select
              mode='multiple'
              placeholder='Employees'
              options={users?.map((user) => ({
                value: user?.user_id,
                label: `${user?.name} ${user?.surname}`,
              }))}
              onChange={(value) =>
                setValues((prev) => ({
                  ...prev,
                  userIds: value,
                }))
              }
              value={values.userIds}
            />
          )}
          <Divider style={{ margin: '7px' }} />
          <RangePicker
            onChange={(date) => {
              date &&
                setValues((prev) => ({
                  ...prev,
                  startDate: date?.[0].format('YYYY-MM-DD'),
                  endDate: date?.[1].format('YYYY-MM-DD'),
                }))
            }}
          />
          <Divider style={{ margin: '7px' }} />
        </Flex>
        <div className='buttons_'>
          <Button className='submit_btn' onClick={reset}>
            Reset
          </Button>
          <Button
            className='submit_btn'
            key='yes'
            htmlType='submit'
            onClick={onSubmit}
          >
            Filter
          </Button>
        </div>
      </Drawer>
    </>
  )
}

export default Filter

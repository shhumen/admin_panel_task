import { Button, Divider, Drawer, Flex, Tooltip } from 'antd'
import React from 'react'
import filter from '@/shared/media/imgs/filter.svg'
import { Input, Select } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { filterEmployeeSchema } from '@/validation'
import { useGetTeamsQuery } from '@/redux/api/teams'
import { useModal } from '@/hooks'
import { useGetProjectsQuery } from '@/redux/api/projects'

const Filter = ({ setUser, modalOpen, setModalOpen }) => {
  const { pageState } = useModal()
  const { data: projects } = useGetProjectsQuery({
    page: pageState.current,
  })
  const { data: teams } = useGetTeamsQuery()
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm({
    resolver: zodResolver(filterEmployeeSchema),
  })

  const onSubmit = () => {
    setUser((prevState) => ({
      ...prevState,
      firstName: getValues().firstname,
      lastName: getValues().lastname,
      email: getValues().email,
      teamIds: getValues().teamIds,
      projectIds: getValues().projectIds,
    }))
    setModalOpen(false)
  }

  return (
    <>
      <Tooltip placement='bottom' title={'Filter'}>
        <button
          className='filter_btn'
          type='primary'
          onClick={() => setModalOpen(true)}
        >
          <img src={filter} alt='filter' />
        </button>
      </Tooltip>
      <Drawer
        centered
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        okButtonProps={{ className: 'filter' }}
        okText='Filter'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex vertical>
            <h4>Filter Employees</h4>
            <Divider />
            <Controller
              name='firstname'
              control={control}
              render={({ field }) => (
                <Input
                  variant='filled'
                  placeholder='First Name'
                  className='input'
                  {...field}
                />
              )}
            />
            {errors.firstname && (
              <span className='error'>{errors.firstname.message}</span>
            )}
            <Divider style={{ margin: '7px' }} />
            <Controller
              name='lastname'
              control={control}
              render={({ field }) => (
                <Input
                  variant='filled'
                  placeholder='Last Name'
                  className='input'
                  {...field}
                />
              )}
            />
            <br />
            {errors.lastname && (
              <span className='error'>{errors.lastname.message}</span>
            )}
            <Divider style={{ margin: '7px' }} />
            <Controller
              name='projectIds'
              control={control}
              render={({ field }) => (
                <Select
                  mode='multiple'
                  placeholder='Project'
                  options={projects?.content?.map((project) => ({
                    value: project?.project_id,
                    label: project?.name,
                  }))}
                  {...field}
                />
              )}
            />
            <br />
            {errors.role && (
              <span className='error'>{errors.role.message}</span>
            )}
            <Divider style={{ margin: '7px' }} />
            <Controller
              name='teamIds'
              control={control}
              render={({ field }) => (
                <Select
                  mode='multiple'
                  placeholder='Team'
                  options={teams?.map((team) => ({
                    value: team?.team_id,
                    label: team?.name,
                  }))}
                  {...field}
                />
              )}
            />
            <br />
            {errors.team_id && (
              <span className='error'>{errors.team_id.message}</span>
            )}
          </Flex>
          <br />
          <div className='buttons_'>
            <Button className='submit_btn reset' onClick={() => reset()}>
              Reset
            </Button>
            <Button className='submit_btn filter' key='yes' htmlType='submit'>
              Filter
            </Button>
          </div>
        </form>
      </Drawer>
    </>
  )
}

export default Filter

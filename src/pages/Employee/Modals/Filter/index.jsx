import { Button, Divider, Drawer, Flex } from 'antd'
import React from 'react'
import filter from '@/shared/media/imgs/filter.svg'
import styles from './style.module.scss'
import { Input, Select } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { filterEmployeeSchema } from '@/validation'
import { useGetRolesQuery } from '@/redux/api/roles'
import { useGetTeamsQuery } from '@/redux/api/teams'
import { useSelector } from 'react-redux'
import { useGetProjectsQuery } from '@/redux/api/projects'

const Filter = ({ setUser, modalOpen, setModalOpen }) => {
  const { data: roles } = useGetRolesQuery()
  const { data: projects } = useGetProjectsQuery({
    page: 1,
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
            <Button className='submit_btn' onClick={() => reset()}>
              Reset
            </Button>
            <Button className='submit_btn' key='yes' htmlType='submit'>
              Filter
            </Button>
          </div>
        </form>
      </Drawer>
    </>
  )
}

export default Filter

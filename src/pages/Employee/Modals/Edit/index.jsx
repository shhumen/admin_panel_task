import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Flex, Input, Modal, Select } from 'antd'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useUpdateUserMutation, useGetUserByIdQuery } from '@/redux/api/user'
import { useSelector } from 'react-redux'
import { createEmployeeSchema } from '@/validation'
import { useGetRolesQuery } from '@/redux/api/roles'
import { useGetTeamsQuery } from '@/redux/api/teams'

const Edit = ({ isOpen, setOpen, actionType }) => {
  const userId = actionType?.userId
  const { data: userDetails } = useGetUserByIdQuery(userId)
  console.log(userDetails, 'user details')
  const { data: roles } = useGetRolesQuery()
  const roles_ = roles?.filter((role) => role.role_id !== 3)
  const { data: teams } = useGetTeamsQuery()
  const [updateUser] = useUpdateUserMutation()
  const { role } = useSelector((state) => state.auth.user)

  const filteredRoles = roles_
    ? role.roleEnum === 'SUPERADMIN'
      ? roles_.filter((role) => role.role_id > 1)
      : role.roleEnum === 'ADMIN'
      ? roles_.filter((role) => role.role_name !== 'ADMIN' && role.role_id > 2)
      : []
    : []

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm({
    resolver: zodResolver(createEmployeeSchema),
  })

  useEffect(() => {
    if (userDetails) {
      reset(userDetails)
    }
  }, [userDetails, reset])

  const onSubmit = () => {
    updateUser({})
  }

  return (
    <Modal
      title='Edit Employee'
      centered
      open={isOpen}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <form>
        <Flex vertical>
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
          <br />
          {errors.firstname && (
            <span className='error'>{errors.firstname.message}</span>
          )}
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
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Input
                variant='filled'
                placeholder='Email'
                className='input'
                {...field}
              />
            )}
          />
          <br />
          {errors.email && (
            <span className='error'>{errors.email.message}</span>
          )}
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <Input.Password
                variant='filled'
                placeholder='Password'
                className='input'
                {...field}
              />
            )}
          />
          <br />
          {errors.password && (
            <span className='error'>{errors.password.message}</span>
          )}
          <Controller
            name='role'
            control={control}
            render={({ field }) => (
              <Select
                placeholder='Role'
                options={filteredRoles?.map((role) => ({
                  value: role?.role_id,
                  label: role?.role_name,
                }))}
                {...field}
              />
            )}
          />
          <br />
          {errors.role && <span className='error'>{errors.role.message}</span>}
          <Controller
            name='team_id'
            control={control}
            render={({ field }) => (
              <Select
                placeholder='Team'
                options={teams?.map((project) => ({
                  value: project?.team_id,
                  label: project?.name,
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
        <Button key='yes' htmlType='submit'>
          Submit
        </Button>
      </form>
    </Modal>
  )
}

export default Edit

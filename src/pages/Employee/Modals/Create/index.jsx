import { Button, Divider, Flex, Modal } from 'antd'
import { Input, Select } from 'antd'
import { create } from '@/shared/media'
import { useCreateUserMutation } from '@/redux/api/user'
import { useGetRolesQuery } from '@/redux/api/roles'
import { useGetTeamsQuery } from '@/redux/api/teams'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createEmployeeSchema } from '@/validation'
import { useSelector } from 'react-redux'

const Create = ({ modalOpen, setModalOpen }) => {
  const { data: roles } = useGetRolesQuery()
  const { data: teams } = useGetTeamsQuery()
  const [createUser, { isSuccess }] = useCreateUserMutation()
  const { role } = useSelector((state) => state.auth.user)

  const roles_ = roles && roles.filter((role) => role.role_name !== 'HEAD')
  const minRoleIds = {
    SUPERADMIN: 1,
    ADMIN: 2,
  }
  const minRoleId = minRoleIds[role?.roleEnum]
  const filteredRoles = roles_
    ? roles_.filter((role) => role?.role_id > minRoleId)
    : []

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    control,
    reset,
  } = useForm({
    resolver: zodResolver(createEmployeeSchema),
  })

  const onSubmit = (formData) => {
    const selectedRole = roles?.find(
      (role) => role?.role_id === Number(formData.role)
    )
    createUser({
      firstname: getValues().firstname,
      lastname: getValues().lastname,
      email: getValues().email,
      password: getValues().password,
      role: {
        id: selectedRole.role_id,
        roleEnum: selectedRole.role_name,
      },

      team_id: getValues().team_id,
    })
    reset()
    setModalOpen(false)
  }

  const handleCancel = () => {
    setModalOpen(false)
  }

  return (
    <>
      <button
        className='create'
        type='primary'
        onClick={() => setModalOpen(true)}
      >
        <img src={create} alt='create' />
      </button>
      <Modal
        title='Create modal'
        centered
        open={modalOpen}
        onCancel={handleCancel}
        footer={null}
        okButtonProps={{ className: 'create' }}
        okText='Create'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex vertical>
            <Divider style={{ margin: '7px' }} />

            <Controller
              name='firstname'
              control={control}
              render={({ field }) => (
                <Input
                  type='text'
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
            <Divider style={{ margin: '7px' }} />
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
            <Divider style={{ margin: '7px' }} />
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
            {errors.role && (
              <span className='error'>{errors.role.message}</span>
            )}
            <Divider style={{ margin: '7px' }} />

            <Controller
              name='team_id'
              control={control}
              defaultValue={0}
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
            <Divider style={{ margin: '7px' }} />
          </Flex>
          <br />
          <Button className='submit_btn' key='yes' htmlType='submit'>
            Create
          </Button>
        </form>
      </Modal>
    </>
  )
}

export default Create

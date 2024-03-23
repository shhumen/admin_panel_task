// import { zodResolver } from '@hookform/resolvers/zod'
// import { Button, Divider, Flex, Input, Modal, Select } from 'antd'
// import React, { useEffect, useMemo } from 'react'
// import { Controller, useForm } from 'react-hook-form'
// import { useUpdateUserMutation, useGetUserByIdQuery } from '@/redux/api/user'
// import { useSelector } from 'react-redux'
// import { useGetRolesQuery } from '@/redux/api/roles'
// import { useGetTeamsQuery } from '@/redux/api/teams'
// import { updateUserSchema } from '@/validation'

// const Edit = ({ isOpen, setOpen, actionType }) => {
//   const userId = actionType?.userId
//   const { data: userDetails } = useGetUserByIdQuery(userId)
//   const { data: roles } = useGetRolesQuery()
//   const { data: teams } = useGetTeamsQuery()
//   const [updateUser, { isSuccess }] = useUpdateUserMutation()
//   const { role } = useSelector((state) => state.auth.user)

//   const roles_ = roles && roles.filter((role) => role.role_name !== 'HEAD')
//   const minRoleIds = {
//     SUPERADMIN: 1,
//     ADMIN: 2,
//   }
//   const minRoleId = minRoleIds[role?.roleEnum]
//   const filteredRoles = roles_
//     ? roles_.filter((role) => role?.role_id > minRoleId)
//     : []
//   const {
//     handleSubmit,
//     formState: { errors },
//     getValues,
//     control,
//     reset,
//   } = useForm({
//     resolver: zodResolver(updateUserSchema),
//   })

//   useEffect(() => {
//     if (userDetails) {
//       const { email, name, team, role, surname } = userDetails
//       reset({ email, name, role: role?.id, team_id: team?.id, surname })
//     }
//   }, [userDetails, reset, isSuccess])

//   const onSubmit = () => {
//     updateUser({
//       user_id: userId,
//       name: getValues().name,
//       surname: getValues().surname,
//       email: getValues().email,
//       roleId: getValues().role,
//       teamId: getValues().team_id,
//     })
//     isSuccess && setOpen(false)
//   }

//   return (
//     <Modal
//       title='Edit Employee'
//       centered
//       open={isOpen}
//       footer={null}
//       onCancel={() => setOpen(false)}
//     >
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Flex vertical>
//           <Controller
//             name='name'
//             control={control}
//             render={({ field }) => (
//               <Input
//                 variant='filled'
//                 placeholder='First Name'
//                 className='input'
//                 {...field}
//                 onChange={(e) => field.onChange(e.target.value)}
//               />
//             )}
//           />
//           {errors.name && <span className='error'>{errors.name.message}</span>}
//           <Divider style={{ margin: '7px' }} />
//           <Controller
//             name='surname'
//             control={control}
//             render={({ field }) => (
//               <Input
//                 variant='filled'
//                 placeholder='Last Name'
//                 className='input'
//                 {...field}
//                 onChange={(e) => field.onChange(e.target.value)}
//               />
//             )}
//           />
//           {errors.surname && (
//             <span className='error'>{errors.surname.message}</span>
//           )}
//           <Divider style={{ margin: '7px' }} />
//           <Controller
//             name='email'
//             control={control}
//             render={({ field }) => (
//               <Input
//                 variant='filled'
//                 placeholder='Email'
//                 className='input'
//                 {...field}
//                 onChange={(e) => field.onChange(e.target.value)}
//               />
//             )}
//           />
//           {errors.email && (
//             <span className='error'>{errors.email.message}</span>
//           )}
//           <Divider style={{ margin: '7px' }} />
//           <Controller
//             name='role'
//             control={control}
//             render={({ field }) => (
//               <Select
//                 placeholder='Role'
//                 options={filteredRoles?.map((role) => ({
//                   value: role?.role_id,
//                   label: role?.role_name,
//                 }))}
//                 {...field}
//               />
//             )}
//           />
//           {errors.role && <span className='error'>{errors.role.message}</span>}
//           <Divider style={{ margin: '7px' }} />
//           <Controller
//             name='team_id'
//             control={control}
//             render={({ field }) => (
//               <Select
//                 placeholder='Team'
//                 options={teams?.map((project) => ({
//                   value: project?.team_id,
//                   label: project?.name,
//                 }))}
//                 {...field}
//               />
//             )}
//           />
//           {errors.team_id && (
//             <span className='error'>{errors.team_id.message}</span>
//           )}
//           <Divider style={{ margin: '7px' }} />
//         </Flex>
//         <Button className='submit_btn' key='yes' htmlType='submit'>
//           Edit
//         </Button>
//       </form>
//     </Modal>
//   )
// }

// export default Edit

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Divider, Flex, Input, Modal, Select } from 'antd'
import React, { useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useUpdateUserMutation, useGetUserByIdQuery } from '@/redux/api/user'
import { useSelector } from 'react-redux'
import { createEmployeeSchema } from '@/validation'
import { useGetRolesQuery } from '@/redux/api/roles'
import { useGetTeamsQuery } from '@/redux/api/teams'
import { updateUserSchema } from '@/validation'

const Edit = ({ isOpen, setOpen, actionType }) => {
  const userId = actionType?.userId
  const { data: userDetails } = useGetUserByIdQuery(userId)
  const { data: roles } = useGetRolesQuery()
  const { data: teams } = useGetTeamsQuery()
  const [updateUser, { isSuccess }] = useUpdateUserMutation()
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
    resolver: zodResolver(updateUserSchema),
  })

  useEffect(() => {
    if (userDetails) {
      const { email, name, team, role, surname } = userDetails
      reset({ email, name, role: role?.id, team_id: team?.id, surname })
    }
  }, [userDetails, reset])

  const onSubmit = () => {
    updateUser({
      user_id: userId,
      name: getValues().name,
      surname: getValues().surname,
      email: getValues().email,
      roleId: getValues().role,
      teamId: getValues().team_id,
    })
    setOpen(false)
  }

  return (
    <Modal
      title='Edit Employee'
      centered
      open={isOpen}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <Input
                variant='filled'
                placeholder='First Name'
                className='input'
                {...field}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          {errors.name && <span className='error'>{errors.name.message}</span>}
          <Divider style={{ margin: '7px' }} />
          <Controller
            name='surname'
            control={control}
            render={({ field }) => (
              <Input
                variant='filled'
                placeholder='Last Name'
                className='input'
                {...field}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          {errors.surname && (
            <span className='error'>{errors.surname.message}</span>
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
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          {errors.email && (
            <span className='error'>{errors.email.message}</span>
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
          {errors.role && <span className='error'>{errors.role.message}</span>}
          <Divider style={{ margin: '7px' }} />
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
          {errors.team_id && (
            <span className='error'>{errors.team_id.message}</span>
          )}
          <Divider style={{ margin: '7px' }} />
        </Flex>
        <Button className='submit_btn' key='yes' htmlType='submit'>
          Edit
        </Button>
      </form>
    </Modal>
  )
}

export default Edit

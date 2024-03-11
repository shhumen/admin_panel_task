import React from 'react'
import { Button, Divider, Flex, Form, Input, Modal } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { changePasswordSchema } from '@/validation'
import { useChangeUserPasswordMutation } from '@/redux/api/user'
const ChangePassword = ({ isOpen, setOpen }) => {
  const [changeUserPassword, { isSuccess }] = useChangeUserPasswordMutation()

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    control,
    reset,
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  })

  const onSubmit = () => {
    changeUserPassword(getValues())
    setOpen(false)
    reset()
  }

  return (
    <>
      <Modal
        title='Change Password'
        centered
        open={isOpen}
        onCancel={() => setOpen(false)}
        okText='Change'
        okButtonProps={{
          className: 'change-password',
        }}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex vertical>
            <Controller
              name='oldPassword'
              control={control}
              render={({ field }) => (
                <Input.Password
                  variant='filled'
                  placeholder='Old Password'
                  className='input'
                  {...field}
                />
              )}
            />
            {errors.oldPassword && (
              <span className='error'>{errors.oldPassword.message}</span>
            )}
            <Divider style={{ margin: '7px' }} />
            <Controller
              name='newPassword'
              control={control}
              render={({ field }) => (
                <Input.Password
                  variant='filled'
                  placeholder='New Password'
                  className='input'
                  {...field}
                />
              )}
            />
            {errors.newPassword && (
              <span className='error'>{errors.newPassword.message}</span>
            )}
            <Divider style={{ margin: '7px' }} />
            <Controller
              name='newPasswordAgain'
              control={control}
              render={({ field }) => (
                <Input.Password
                  variant='filled'
                  placeholder='Confirm new Password'
                  className='input'
                  {...field}
                />
              )}
            />
            {errors.newPasswordAgain && (
              <span className='error'>{errors.newPasswordAgain.message}</span>
            )}
            <Divider style={{ margin: '7px' }} />
          </Flex>
          <Button htmlType='submit'>Change</Button>
        </form>
      </Modal>
    </>
  )
}
export default ChangePassword

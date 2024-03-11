import React from 'react'
import { Button, Divider, Flex, Form, Input, Modal, Select } from 'antd'
import { resetPasswordSchema } from '@/validation'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useResetUserPasswordMutation } from '@/redux/api/user'

const ResetPasswordModal = ({ isOpen, setOpen, actionType }) => {
  const [resetUserPassword, { isSuccess }] = useResetUserPasswordMutation()

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
  } = useForm({ resolver: zodResolver(resetPasswordSchema) })

  const onSubmit = async (formData) => {
    const { newPassword } = formData
    const { userId } = actionType
    await resetUserPassword({ user_id: userId, newPassword })
    setOpen(false)
    reset()
  }

  return (
    <Modal
      title='Reset Password'
      centered
      open={isOpen}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical>
          <Controller
            name='newPassword'
            control={control}
            render={({ field }) => (
              <Input.Password
                placeholder='New Password'
                variant='filled'
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
            name='confirmPassword'
            control={control}
            render={({ field }) => (
              <Input.Password
                placeholder='Confirm Password'
                variant='filled'
                className='input'
                {...field}
              />
            )}
          />
          {errors.confirmPassword && (
            <span className='error'>{errors.confirmPassword.message}</span>
          )}
        </Flex>
        <Divider style={{ margin: '7px' }} />
        <Button className='submit_btn' htmlType='submit'>
          Reset
        </Button>
      </form>
    </Modal>
  )
}

export default ResetPasswordModal

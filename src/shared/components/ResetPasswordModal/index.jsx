import React from 'react'
import { Button, Flex, Form, Input, Modal, Select } from 'antd'
import { resetPasswordSchema } from '@/validation'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useResetUserPasswordMutation } from '@/redux/api/user'

const ResetPasswordModal = ({ isOpen, setOpen, actionType }) => {
  const [resetUserPassword] = useResetUserPasswordMutation()

  console.log(actionType)

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({ resolver: zodResolver(resetPasswordSchema) })

  const onSubmit = async (formData) => {
    console.log(formData)
    const { newPassword } = formData
    const { userId } = actionType
    await resetUserPassword({ user_id: userId, newPassword })
    setOpen(false)
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
          <br />
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
        <br />
        <Button>Submit</Button>
      </form>
    </Modal>
  )
}

export default ResetPasswordModal

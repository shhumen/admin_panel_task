import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Divider, Flex, Input } from 'antd'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { forgotPasswordChangeSchema } from '@/validation'
import { useForgotPasswordMutation } from '@/redux/api/otp'
import { toast } from 'sonner'
import changePsswordPic from '@/shared/media/imgs/changePassword.png'
import { useNavigate } from 'react-router-dom'
const ChangePassword = ({ email }) => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm({ resolver: zodResolver(forgotPasswordChangeSchema) })

  const [forgotPassword, { isLoading, isSuccess, isError }] =
    useForgotPasswordMutation()

  const onSubmit = () => {
    forgotPassword({
      email: email,
      newPassword: getValues().newPassword,
      newPasswordAgain: getValues().newPasswordAgain,
    })
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [isSuccess])

  return (
    <Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={changePsswordPic} alt='verify-otp' />
        <Controller
          name='newPassword'
          control={control}
          render={({ field }) => (
            <>
              <h5>Reset your password.. </h5>
              <Divider style={{ margin: '7px' }} />
              <Input.Password
                placeholder='Password'
                variant='filled'
                className='input'
                {...field}
              />
            </>
          )}
        />
        <Divider style={{ margin: '7px' }} />
        {errors.newPassword && (
          <span className='error'>{errors.newPassword.message}</span>
        )}
        <Divider style={{ margin: '7px' }} />
        <Controller
          name='newPasswordAgain'
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
        <Divider style={{ margin: '7px' }} />
        {errors.newPasswordAgain && (
          <span className='error'>{errors.newPasswordAgain.message}</span>
        )}
        <Divider style={{ margin: '7px' }} />
        <Button size='large' htmlType='submit' disabled={isLoading}>
          Change Password
        </Button>
      </form>
    </Flex>
  )
}

export default ChangePassword

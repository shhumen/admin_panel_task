import React, { useEffect } from 'react'
import { Button, Divider, Flex, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { verifyOtpSchema } from '@/validation'
import { useVerifyOtpMutation } from '@/redux/api/otp'
import { toast } from 'sonner'
import verifyOtpPic from '@/shared/media/imgs/verifyOtp.png'

const VerifyOtp = ({ email, setIsOtpVerified, setPasswordConfirmed }) => {
  const [verifyOtp, { isSuccess, isError, isLoading }] = useVerifyOtpMutation()

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: zodResolver(verifyOtpSchema) })

  const onSubmit = (data) => {
    verifyOtp(data.otp)
  }

  useEffect(() => {
    if (isSuccess) {
      setIsOtpVerified(true)
      setPasswordConfirmed(true)
    }
  }, [isSuccess])

  return (
    <Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={verifyOtpPic} alt='verify-otp' />
        <Controller
          name='otp'
          control={control}
          render={({ field }) => (
            <>
              <br />
              <h5>Enter verification code </h5>
              <Divider style={{ margin: '3px' }} />
              <span>
                We are automatically sending code to your{' '}
                <strong>{email}</strong> address
              </span>
              <Divider style={{ margin: '7px' }} />

              <Input
                placeholder='Verify OTP'
                variant='filled'
                className='input'
                {...field}
              />
            </>
          )}
        />
        <Divider style={{ margin: '7px' }} />
        {errors.otp && <span className='error'>{errors.otp.message}</span>}
        <Divider style={{ margin: '7px' }} />
        <Button size='large' htmlType='submit' disabled={isLoading}>
          Verify OTP
        </Button>
      </form>
    </Flex>
  )
}

export default VerifyOtp

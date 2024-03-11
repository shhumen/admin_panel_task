import React, { useEffect } from 'react'
import { Button, Divider, Flex, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ForgotPasswordSchema } from '@/validation'
import { useGenerateOtpMutation } from '@/redux/api/otp'
import { toast } from 'sonner'
import generateOtpPic from '@/shared/media/imgs/generateOtp.png'

const GenerateOtp = ({ setEmail, setIsOtpGenerated }) => {
  const [generateOtp, { isSuccess, isError, isLoading }] =
    useGenerateOtpMutation()

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({ resolver: zodResolver(ForgotPasswordSchema) })

  const onSubmit = (data) => {
    generateOtp(data.email)
  }

  useEffect(() => {
    if (isSuccess) {
      setEmail(getValues().email)
      setIsOtpGenerated(true)
    }
    if (isError) {
      toast.error('Failed to generate OTP. Please try again.')
    }
  }, [isSuccess, isError])

  return (
    <Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={generateOtpPic} alt='generate-otp' />
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <>
              <br />
              <h5>Enter your email address</h5>
              <Divider style={{ margin: '3px' }} />
              <span>We will send your confirmation code...</span>
              <Divider style={{ margin: '7px' }} />
              <Input
                placeholder='Email'
                variant='filled'
                className='input'
                {...field}
              />
            </>
          )}
        />
        <Divider style={{ margin: '7px' }} />
        {errors.email && <span className='error'>{errors.email.message}</span>}
        <Divider style={{ margin: '7px' }} />
        <Button size='large' htmlType='submit' disabled={isLoading}>
          Generate OTP
        </Button>
      </form>
    </Flex>
  )
}

export default GenerateOtp

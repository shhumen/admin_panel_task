import { createApi } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'
import { toast } from 'sonner'

const VALIDATOR = ['OTP']

export const otpApi = createApi({
  reducerPath: 'otp',
  baseQuery: APIBaseQuery,
  endpoints: (builder) => ({
    generateOtp: builder.mutation({
      query: (email) => {
        return {
          url: `user/generate-otp?email=${email}`,
          method: 'POST',
          data: email,
        }
      },
      invalidatesTags: VALIDATOR,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          toast.success(data.msg)
        } catch (error) {
          return error
        }
      },
    }),
    verifyOtp: builder.mutation({
      query: (otp) => {
        return {
          url: `user/verify-otp?otp=${otp}`,
          method: 'POST',
          data: otp,
        }
      },
      invalidatesTags: VALIDATOR,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          toast.success(data.msg)
        } catch (error) {
          toast.error('OTP code is wrong')
        }
      },
    }),
    forgotPassword: builder.mutation({
      query: ({ email, newPassword, newPasswordAgain }) => {
        return {
          url: 'user/forgot-password',
          method: 'POST',
          data: { email, newPassword, newPasswordAgain },
        }
      },
      invalidatesTags: VALIDATOR,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          toast.success(data.msg)
        } catch (error) {
          return error
        }
      },
    }),
  }),
})

export const {
  useGenerateOtpMutation,
  useVerifyOtpMutation,
  useForgotPasswordMutation,
} = otpApi

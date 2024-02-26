import { createApi } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'
import { setToken, setUserData } from '@/redux/features/auth/authSlice'
import { toast } from 'sonner'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: APIBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query(data) {
        return {
          url: 'auth/authenticate',
          method: 'POST',
          data,
        }
      },
      transformErrorResponse: (error) => error,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setToken(data))
          await dispatch(authApi.endpoints.getMyProfile.initiate(data))
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      },
    }),
    getMyProfile: builder.query({
      query() {
        return {
          url: 'auth/profile',
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUserData(data))
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      },
    }),
  }),
})
//  superadminpassword
export const { useLoginMutation, useGetMyProfileQuery } = authApi

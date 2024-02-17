import { createApi } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'
import {
  setToken,
  setUserData,
  setError,
} from '@/redux/features/auth/authSlice'
import { toast } from 'sonner'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: APIBaseQuery,
  endpoints(builder) {
    return {
      login: builder.mutation({
        query: (data) => ({
          url: 'auth/authenticate',
          method: 'POST', // accessToken,refreshToken,expireesTime
          data,
        }),
        transformErrorResponse: (error) => toast.error(`${error.data.message}`),

        //  console.log()
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled
            console.log(data, 'hello from authapi')
            dispatch(setToken(data))
            await dispatch(authApi.endpoints.getMyProfile.initiate(null))
          } catch (err) {
            console.log(err)
          }
        },
      }),
      getMyProfile: builder.query({
        query: () => ({
          url: `user/profile`,
        }),
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUserData(data))
        } catch (error) {
          console.log(error)
        }
      },
    }
  },
})

//  superadminpassword

export const { useLoginMutation } = authApi

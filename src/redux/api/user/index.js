import { createApi, retry } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'
import { toast } from 'sonner'
import { message } from 'antd'

const VALIDATOR = ['Users']

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: APIBaseQuery,
  tagTypes: VALIDATOR,

  endpoints(builder) {
    return {
      getUsers: builder.query({
        query() {
          return {
            url: `user/all`,
          }
        },
        providesTags: VALIDATOR,
        transformResponse: (res) => res.sort((a, b) => b.user_id - a.user_id),
      }),
      getUserById: builder.query({
        query(user_id) {
          return {
            url: `user/${user_id}`,
          }
        },
        providesTags: VALIDATOR,
      }),
      userFilter: builder.query({
        query: ({
          firstName,
          lastName,
          teamIds,
          projectIds,
          page,
          pageSize,
        }) => {
          const queryParams = new URLSearchParams({
            ...(page && { page }),
            ...(pageSize && { pageSize }),
            ...(firstName && { firstName }),
            ...(lastName && { lastName }),
          })
          if (teamIds && teamIds.length > 0) {
            teamIds.forEach((id) => {
              queryParams.append('teamIds', id)
            })
          }
          if (projectIds && projectIds.length > 0) {
            projectIds.forEach((id) => {
              queryParams.append('projectIds', id)
            })
          }
          const url = `user/filter?${queryParams.toString()}`
          return { url }
        },
        providesTags: VALIDATOR,
      }),
      deleteUser: builder.mutation({
        query(user_id) {
          return {
            url: `user/${user_id}`,
            method: 'DELETE',
            data: user_id,
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
      createUser: builder.mutation({
        query(data) {
          return {
            url: 'auth/register',
            method: 'POST',
            data,
          }
        },
        invalidatesTags: VALIDATOR,
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled
            toast.success(data.msg)
          } catch (error) {
            toast.error(error.msg)
            return error
          }
        },
      }),
      changeStatus: builder.mutation({
        query({ user_id, status, ...rest }) {
          return {
            url: `user/status/${user_id}?status=${status}`,
            method: 'PUT',
            data: rest,
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
      resetUserPassword: builder.mutation({
        query({ user_id, newPassword }) {
          return {
            url: `user/resetPassword/${user_id}?newPassword=${newPassword}`,
            method: 'POST',
            data: newPassword,
          }
        },
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled
            toast.success('Password resetting was successful')
          } catch (error) {
            toast.error(error)
          }
        },
        invalidatesTags: VALIDATOR,
      }),
      updateUser: builder.mutation({
        query({ user_id, ...data }) {
          return {
            url: `user/${user_id}`,
            method: 'PUT',
            data,
          }
        },
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled
            toast.success(data.msg)
          } catch (error) {
            // message.error(error?.message)
          }
        },
        invalidatesTags: VALIDATOR,
      }),
      changeUserPassword: builder.mutation({
        query(data) {
          return {
            url: 'user/changePassword',
            method: 'POST',
            data,
          }
        },
        invalidatesTags: VALIDATOR,
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled
            toast.success('Password successfully changed')
          } catch (error) {
            toast.error(error.message)
          }
        },
      }),
    }
  },
})

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUserFilterQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useChangeStatusMutation,
  useChangeUserPasswordMutation,
  useResetUserPasswordMutation,
  useUpdateUserMutation,
} = userApi

import { createApi, retry } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'
import { toast } from 'sonner'

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
      // getAllUsers: builder.query({
      //   query() {
      //     return {
      //       url: `user/filter?firstName=shumen&lastName=Mehdiyeva&page=1&pageSize=20`,
      //     }
      //   },
      //   providesTags: VALIDATOR,
      //   transformResponse: (res) => res.sort((a, b) => b.user_id - a.user_id),
      // }),
      getUserById: builder.query({
        query(user_id) {
          return {
            url: `user/${user_id}`,
          }
        },
      }),
      userFilter: builder.query({
        query({ firstName, lastName, teamIds, projectsIds }) {
          let url_ = 'user/filter?'
          if (firstName) {
            url_ += `firstName=${firstName}&`
          }
          if (lastName) {
            url_ += `lastName=${lastName}&`
          }
          if (teamIds && teamIds.length > 0) {
            teamIds.forEach((id) => {
              url_ += `teamIds=${id}&`
            })
          }
          if (projectsIds && projectsIds.length > 0) {
            projectsIds.forEach((id) => {
              url_ += `projectIds=${id}&`
            })
          }
          // url_ = url_.slice(0, -1)
          return {
            url: `user/filter?${url_}`,
          }
        },
      }),
      deleteUser: builder.mutation({
        query(user_id) {
          return {
            url: `user/${user_id}`,
            method: 'DELETE',
            data: user_id,
          }
        },
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled
            toast.success(data.msg)
          } catch (error) {
            // toast.error(error.error.data.message)
            console.log(error)
          }
        },
        // transformErrorResponse: (error) => error,
        invalidatesTags: VALIDATOR,
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
            console.log(data)
          } catch (error) {
            toast.error(error.msg)
            console.log(error)
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
            console.log(error)
          }
        },
      }),
      resetUserPassword: builder.mutation({
        query({ user_id, newPassword, ...rest }) {
          return {
            url: `user/resetPassword/${user_id}?newPassword=${newPassword}`,
            method: 'POST',
            data: rest,
          }
        },
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled
            toast.success('Password resetting was successful')
            console.log(data)
          } catch (error) {
            toast.error(error)
            console.log(error)
          }
        },
        invalidatesTags: VALIDATOR,
      }),
      updateUser: builder.mutation({
        query: ({ user_id, ...rest }) => ({
          url: `/users/${user_id}`,
          method: 'PUT',
          data: rest,
        }),
        invalidatesTags: VALIDATOR,
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
  useResetUserPasswordMutation,
  useUpdateUserMutation,
} = userApi

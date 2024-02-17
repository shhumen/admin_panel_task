import { createApi } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: APIBaseQuery,
  endpoints(builder) {
    return {
      getUsers: builder.query({
        query: () => ({
          url: `user/all`,
        }),
      }),
    }
  },
})

export const { useGetUsersQuery } = userApi

import { createApi } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'

export const rolesApi = createApi({
  reducerPath: 'rolesApi',
  baseQuery: APIBaseQuery,
  endpoints(builder) {
    return {
      getRoles: builder.query({
        query() {
          return {
            url: 'roles',
          }
        },
      }),
    }
  },
})

export const { useGetRolesQuery } = rolesApi

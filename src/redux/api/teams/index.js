import { createApi } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'
import { toast } from 'sonner'

const VALIDATOR = ['Teams']

export const teamsApi = createApi({
  reducerPath: 'teamsApi',
  baseQuery: APIBaseQuery,
  tagTypes: VALIDATOR,
  endpoints: (builder) => ({
    getTeams: builder.query({
      query() {
        return {
          url: 'teams',
        }
      },
      transformResponse: (res) => res.sort((a, b) => b.team_id - a.team_id),
      providesTags: VALIDATOR,
    }),
    getTeamsById: builder.query({
      query(team_id) {
        return {
          url: `teams/${team_id}`,
        }
      },
      providesTags: VALIDATOR,
    }),
    deleteTeam: builder.mutation({
      query(team_id) {
        return {
          url: `teams/${team_id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: VALIDATOR,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          toast.success(data)
        } catch (error) {
          toast.error(error.message)
        }
      },
    }),
    createTeam: builder.mutation({
      query(data) {
        return {
          url: 'teams',
          method: 'POST',
          data,
        }
      },
      invalidatesTags: VALIDATOR,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          // toast.success(data.msg)
          console.log(data)
        } catch (error) {
          // toast.error(error.msg)
          console.log(error)
        }
      },
    }),

    updateTeam: builder.mutation({
      query(team_id, ...data) {
        return {
          url: `teams/${team_id}`,
          method: 'PUT',
          data,
        }
      },
      invalidatesTags: VALIDATOR,
    }),
  }),
})

export const {
  useUpdateTeamMutation,
  useGetTeamsQuery,
  useDeleteTeamMutation,
  useCreateTeamMutation,
  useGetTeamsByIdQuery,
} = teamsApi

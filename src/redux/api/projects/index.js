import { createApi } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'
import { toast } from 'sonner'

const VALIDATOR = ['Projects']

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: APIBaseQuery,
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: ({ projectName, page, pageSize }) => {
        const queryParams = new URLSearchParams({
          ...(page && { page }),
          ...(pageSize && { pageSize }),
          ...(projectName && { projectName }),
        })

        const url = `projects/search?${queryParams.toString()}`
        return { url }
      },
      providesTags: VALIDATOR,
    }),
    getProjectById: builder.query({
      query(project_id) {
        return {
          url: `projects/${project_id}`,
        }
      },
      providesTags: VALIDATOR,
    }),
    createProject: builder.mutation({
      query(data) {
        return {
          url: 'projects',
          method: 'POST',
          data,
        }
      },
      invalidatesTags: VALIDATOR,
    }),
    updateProject: builder.mutation({
      query({ project_id, ...data }) {
        return {
          url: `projects/${project_id}`,
          method: 'PUT',
          data,
        }
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          toast.success('Update succeed')
        } catch (error) {
          toast.error(error.message)
        }
      },
      invalidatesTags: VALIDATOR,
    }),
  }),
})

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
} = projectsApi

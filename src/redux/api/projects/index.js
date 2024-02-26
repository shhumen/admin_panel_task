import { createApi } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'
import { toast } from 'sonner'

const VALIDATOR = ['Projects']

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: APIBaseQuery,
  endpoints: (builder) => ({
    getProjects: builder.query({
      query({ projectName = '', page, pageSize }) {
        return {
          url: `projects/search?${
            projectName.length > 0 ? `?projectName=${projectName}` : ''
          }&page=${page}&pageSize=${pageSize}`,
        }
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
  }),
})

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
} = projectsApi

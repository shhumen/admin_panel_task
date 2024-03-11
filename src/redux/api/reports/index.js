import { createApi } from '@reduxjs/toolkit/query/react'
import { APIBaseQuery } from '../axiosBase'

const VALIDATOR = ['Reports']

export const reportsApi = createApi({
  reducerPath: 'reportsApi',
  baseQuery: APIBaseQuery,
  tagTypes: VALIDATOR,
  endpoints: (builder) => ({
    getReports: builder.query({
      query: ({ startDate, page, pageSize, endDate, projectIds }) => {
        const queryParams = new URLSearchParams({
          ...(page && { page }),
          ...(pageSize && { pageSize }),
          ...(endDate && { endDate }),
          ...(startDate && { startDate }),
        })
        if (projectIds && projectIds.length > 0) {
          projectIds.forEach((id) => {
            queryParams.append('projectIds', id)
          })
        }

        const url = `reports/filter?${queryParams.toString()}`
        return { url }
      },
      providesTags: VALIDATOR,
    }),
    getReportsById: builder.query({
      query(report_id) {
        return {
          url: `reports/${report_id}`,
        }
      },
      providesTags: VALIDATOR,
    }),
    getAdminReports: builder.query({
      query: ({ startDate, page, pageSize, endDate, projectIds, userIds }) => {
        const queryParams = new URLSearchParams({
          ...(page && { page }),
          ...(pageSize && { pageSize }),
          ...(endDate && { endDate }),
          ...(startDate && { startDate }),
        })
        if (projectIds && projectIds.length > 0) {
          projectIds.forEach((id) => {
            queryParams.append('projectIds', id)
          })
        }
        if (userIds && userIds.length > 0) {
          userIds.forEach((id) => {
            queryParams.append('userIds', id)
          })
        }
        const url = `reports/filter-admin?${queryParams.toString()}`
        return { url }
      },
      providesTags: VALIDATOR,
    }),
    getFilterExportReport: builder.query({
      query: ({ startDate, page, pageSize, endDate, projectIds, userIds }) => {
        const queryParams = new URLSearchParams({
          ...(page && { page }),
          ...(pageSize && { pageSize }),
          ...(endDate && { endDate }),
          ...(startDate && { startDate }),
        })
        if (projectIds && projectIds.length > 0) {
          projectIds.forEach((id) => {
            queryParams.append('projectIds', id)
          })
        }
        if (userIds && userIds.length > 0) {
          userIds.forEach((id) => {
            queryParams.append('userIds', id)
          })
        }
        const url = `reports/filter-and-export-excel?${queryParams.toString()}`
        return {
          url,
          responseType: 'blob',
        }
      },
      providesTags: VALIDATOR,
    }),
    createReport: builder.mutation({
      query(data) {
        return {
          url: 'reports',
          method: 'POST',
          data,
        }
      },
      invalidatesTags: VALIDATOR,
    }),
    updateReport: builder.mutation({
      query({ report_id, ...data }) {
        return {
          url: `reports/${report_id}`,
          method: 'PUT',
          data,
        }
      },
      invalidatesTags: VALIDATOR,
    }),
  }),
})

export const {
  useGetReportsQuery,
  useGetReportsByIdQuery,
  useCreateReportMutation,
  useGetAdminReportsQuery,
  useUpdateReportMutation,
  useGetFilterExportReportQuery,
} = reportsApi

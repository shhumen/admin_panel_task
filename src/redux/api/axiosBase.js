import axios from 'axios'
import { ErrorCode } from '@/shared/constants/errorCodes'
import { logout } from '../features/auth/authSlice'
import { v4 as uuid } from 'uuid'

import { toast } from 'sonner'
const baseURL = `${import.meta.env.VITE_BASE_URL}`
export const axiosBaseQuery =
  ({ baseURL = '', headers }) =>
  async ({ url, params, method, data, responseType }, { signal, getState }) => {
    try {
      const result = await axios({
        url: baseURL + url,
        method: method ? method : 'GET',
        ...(params && { params: params }),
        ...(headers && { headers: headers({}, { getState, signal }) }),
        ...(data && { data: data }),
        responseType: responseType ? responseType : 'json',
      })
      return {
        data: result.data,
      }
    } catch (axiosError) {
      const err = axiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }

export const APIBaseQueryInterceptor = axiosBaseQuery({
  baseURL: baseURL,
  headers: (headers, { getState }) => {
    const { auth } = getState()
    if (auth?.access_token) {
      headers['Authorization'] = `Bearer ${auth?.access_token}`
    }
    return headers
  },
})

export const APIBaseQuery = async (args, api, extraOptions) => {
  let result = await APIBaseQueryInterceptor(args, api, extraOptions)
  if (result.error && result.error.status === ErrorCode.UNAUTHORIZED) {
    const state = api
    const userState = state.getState()
    const { auth } = userState
    const { user_id, access_token, refresh_token, expired_date } = auth
    const refreshResult = await APIBaseQueryInterceptor(
      {
        url: 'http://localhost:8081/v1/api/auth/refresh-token',
        data: refresh_token,
        method: 'POST',
      },
      api,
      extraOptions
    )
    if (refreshResult?.data) {
      const data = refreshResult?.data
      const { access_token, refresh_token, expired_date } = data
      await state.dispatch(
        setToken({ access_token, refresh_token, expired_date })
      )
      result = await APIBaseQueryInterceptor(args, api, extraOptions)
    } else {
      state.dispatch(logout())
    }
  } else if (result.error && result.error.status === ErrorCode.FORBIDDEN) {
    toast.error('403 FORBIDDEN')
    api.dispatch(logout())
  } else if (result.error) {
    toast.error(
      result.error?.data?.message ||
        result.error?.data?.error ||
        'Xəta baş verdi'
    )
  }

  return result
}

import axios from 'axios'

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

// export const APIBaseQueryInterceptor = axiosBaseQuery({
//   baseURL: baseURL,
//   headers: (headers, { getState }) => {
//     const { auth } = getState()
//     if (auth?.access_token) {
//       headers['Authorization'] = `${auth?.access_token}`
//     }
//     return headers
//   },
// })

export const APIBaseQueryInterceptor = axiosBaseQuery({
  baseURL: baseURL,
  headers: async (headers, { getState }) => {
    const { auth } = getState()
    if (auth?.access_token) {
      headers['Authorization'] = `${auth?.access_token}`

      const tokenExpiration = new Date(auth?.expired_date)
      const currentTime = new Date()
      console.log(auth.refresh_token)
      console.log(tokenExpiration, currentTime)
      // if (tokenExpiration < currentTime) {
      //   try {
      //     const response = await axios.post(
      //       'http://localhost:8081/v1/api/auth/refresh-token'
      //       // {
      //       //   refresh_token: auth?.refresh_token,
      //       // }
      //     )
      //     const { access_token, tokenExpiration } = response.data

      //     store.dispatch(setToken({ access_token, tokenExpiration }))
      //     headers['Authorization'] = `${access_token}`
      //   } catch (error) {
      //     store.dispatch(logout())
      //   }
      // }
    }
    return headers
  },
})

export const APIBaseQuery = async (args, api, extraOptions) => {
  let result = await APIBaseQueryInterceptor(args, api, extraOptions)

  if (result.error) {
    console.log('Error an occured')
  }

  return result
}

// console.log(currentTime, tokenExpiration)
// if (tokenExpiration < currentTime) {
//   try {
//     const response = await axios.post('refresh-token-endpoint', {
//       refresh_token: auth.refresh_token,
//     })
//     const { access_token, tokenExpiration } = response.data

//     store.dispatch(setToken({ access_token, tokenExpiration }))
//     headers['Authorization'] = `${access_token}`
//   } catch (error) {
//     store.dispatch(logout())
//   }
// }

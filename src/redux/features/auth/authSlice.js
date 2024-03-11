import { createSlice } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

const initialState = {
  user_id: null,
  access_token: null,
  refresh_token: null,
  expired_date: null,
  isAuthenticated: false,
  error: null,
  user: {
    name: '',
    surname: '',
    email: '',
    role: {
      id: null,
      roleEnum: '',
    },
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.user_id = action.payload.user_id
      state.access_token = action.payload.access_token
      state.refresh_token = action.payload.refresh_token
      state.expired_date = action.payload.expired_date
      state.isAuthenticated = true
    },
    setUserData: (state, action) => {
      state.user = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    logout: (state, action) => {
      state.access_token = null
      state.refresh_token = null
      state.expired_date = null
      state.isAuthenticated = false
      state.user = {}
    },
  },
})

const reducer = persistReducer(
  {
    key: 'auth',
    storage,
    whitelist: [
      'user_id',
      'access_token',
      'refresh_token',
      'expired_date',
      'isAuthenticated',
      'user',
    ],
  },
  authSlice.reducer
)

export const { setToken, setUserData, logout, setError } = authSlice.actions
export default reducer

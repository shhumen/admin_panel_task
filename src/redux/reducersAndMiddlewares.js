import { combineReducers } from '@reduxjs/toolkit'
import { authApi } from './api/auth'
import { userApi } from './api/user'
import authReducer from './features/auth/authSlice'
import userReducer from './features/user/userSlice'

export const reducers = {
  auth: authReducer,
  user: userReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
}

combineReducers
export const middlewares = [authApi.middleware, userApi.middleware]

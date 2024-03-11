import authReducer from './features/auth/authSlice'
import { authApi } from './api/auth'
import { userApi } from './api/user'
import { rolesApi } from './api/roles'
import { projectsApi } from './api/projects'
import { teamsApi } from './api/teams'
import { reportsApi } from './api/reports'
import { otpApi } from './api/otp'

export const reducers = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [rolesApi.reducerPath]: rolesApi.reducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
  [reportsApi.reducerPath]: reportsApi.reducer,
  [teamsApi.reducerPath]: teamsApi.reducer,
  [otpApi.reducerPath]: otpApi.reducer,
}

export const middlewares = [
  authApi.middleware,
  userApi.middleware,
  rolesApi.middleware,
  projectsApi.middleware,
  reportsApi.middleware,
  teamsApi.middleware,
  otpApi.middleware,
]

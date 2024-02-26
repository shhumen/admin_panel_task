import authReducer from './features/auth/authSlice'
import { authApi } from './api/auth'
import { userApi } from './api/user'
import { rolesApi } from './api/roles'
import { projectsApi } from './api/projects'
import { teamsApi } from './api/teams'

export const reducers = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [rolesApi.reducerPath]: rolesApi.reducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
  [teamsApi.reducerPath]: teamsApi.reducer,
}

export const middlewares = [
  authApi.middleware,
  userApi.middleware,
  rolesApi.middleware,
  projectsApi.middleware,
  teamsApi.middleware,
]

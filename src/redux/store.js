import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { reducers, middlewares } from '@/redux/reducersAndMiddlewares'
import persistReducer from 'redux-persist/es/persistReducer'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'

export const store = configureStore({
  // reducer: {
  //  user : userReducer,
  //  [loginApi.reducerPath]: loginApi.reducer,
  //  [projectsApi.reducerPath]: projectsApi.reducer,
  //  [employeeApi.reducerPath]: employeeApi.reducer,
  // },
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
})
export const persistor = persistStore(store)
// export const persistor = persistStore(store);
// setupListeners(store.dispatch);

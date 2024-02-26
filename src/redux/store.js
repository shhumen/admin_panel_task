import { configureStore } from '@reduxjs/toolkit'
import { reducers, middlewares } from '@/redux/reducersAndMiddlewares'
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
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
})
export const persistor = persistStore(store)

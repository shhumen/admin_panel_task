import { createSlice } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

const initialState = {
  users: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action, 'from userslice')
      state.users = action.payload
    },
  },
})

const reducer = persistReducer(
  {
    key: 'user',
    storage,
    whitelist: ['user'],
  },
  userSlice.reducer
)

export default reducer
export const { setUser } = userSlice.actions

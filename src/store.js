import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './redux/login/slice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
})
import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi, logoutApi } from './api'

const loginThunk = createAsyncThunk(
  'login',
  async (account, { rejectWithValue }) => {
    try {
      const { data } = await loginApi(account)
      return data
    } catch (err) {
      return rejectWithValue({data: err.response.data, status: err.response.status})
    }
  }
)

const logoutThunk = createAsyncThunk(
  'logout',
  async (payload = null, { rejectWithValue }) => {
    try {
      const { data } = await logoutApi()
      return data
    } catch (err) {
      return rejectWithValue({data: err.response.data, status: err.response.status})
    }
  }
)

export {
  loginThunk,
  logoutThunk
}
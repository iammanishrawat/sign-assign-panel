import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

import type {User} from "../user/userSlice"
import * as AuthAPI from "./authAPI"

export type ChangePasswordPayload = {
  currentPassword: string
  newPassword: string
}

interface AuthState {
  me: User | null
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: AuthState = {
  me: null,
  status: "idle",
  error: null,
}

export const getMe = createAsyncThunk("auth/getMe", async () => {
  return await AuthAPI.getMe()
})

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (payload: ChangePasswordPayload, {rejectWithValue}) => {
    try {
      return await AuthAPI.changePassword(payload)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMe.pending, state => {
        state.status = "loading"
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.me = action.payload
      })
      .addCase(getMe.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })

      .addCase(changePassword.fulfilled, (state, action) => {
        state.status = "succeeded"
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export default authSlice.reducer

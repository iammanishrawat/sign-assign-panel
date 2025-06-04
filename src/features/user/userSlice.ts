import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as UserAPI from './userAPI';

export type User = {
    userId: number
    roleId: number
    firstName: string
    lastName: string
    fullName: string
    email: string
    mobile: string
    gender: string
    profilePhoto: string
    isActive: boolean
    status: boolean
}

export type UpdateUserPayload = {
  userId: number
} & Partial<Omit<User, "userId" | "roleId">>

interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
};

export const updateUser = createAsyncThunk('user/updateUser', async (payload: UpdateUserPayload) => {
  return await UserAPI.updateUser(payload);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default userSlice.reducer;

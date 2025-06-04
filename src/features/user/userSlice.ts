import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { UserAddress } from '../user-address/userAddressSlice';
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
  userAddresses: UserAddress[]
}

export type CreateUserPayload = {
  roleId: number
  firstName: string
  lastName: string
} & Partial<Omit<User, "userId" | "roleId" | "firstName" | "lastName">>

export type UpdateUserPayload = {
  userId: number
} & Partial<Omit<User, "userId" | "roleId">>

export type DeleteUserPayload = {
  userIds: number[]
}

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

export const createUser = createAsyncThunk('user/createUser', async (payload: CreateUserPayload, { rejectWithValue }) => {
  try {
    return await UserAPI.createUser(payload);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const listUser = createAsyncThunk('user/listUser', async () => {
  try {
    return await UserAPI.listUser();
  } catch (error) {
    // return rejectWithValue(error);
  }
});

export const updateUser = createAsyncThunk('user/updateUser', async (payload: UpdateUserPayload) => {
  return await UserAPI.updateUser(payload);
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (payload: DeleteUserPayload, { rejectWithValue }) => {
  try {
    return await UserAPI.deleteUser(payload);
  } catch (error) {
    return rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })

      .addCase(listUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(listUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(listUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })
  },
});

export default userSlice.reducer;

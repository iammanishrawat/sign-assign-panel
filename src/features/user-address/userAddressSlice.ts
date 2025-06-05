import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

import * as UserAddressAPI from "./userAddressAPI"

export type UserAddress = {
  userAddressId: number
  userId: number
  firstName: string
  lastName: string
  companyName: string
  phoneNumber: string
  streetAddress: string
  postal: string
  city: string
  state: string
  country: string
  isDefaultBillingAddress: boolean
  isDefaultShippingAddress: boolean
  status: boolean
}

export type CreateUserAddressPayload = {
  userId: number
  firstName: string
  lastName: string
} & Partial<Omit<UserAddress, "userAddressId" | "userId" | "firstName" | "lastName">>

export type UpdateUserAddressPayload = {
  userAddressId: number
} & Partial<Omit<UserAddress, "userAddressId">>

export type DeleteUserAddressPayload = {
  userAddressIds: number[]
}

interface UserAddressState {
  userAddresses: UserAddress[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: UserAddressState = {
  userAddresses: [],
  status: "idle",
  error: null,
}

export const createUserAddress = createAsyncThunk(
  "userAddress/createUserAddress",
  async (payload: CreateUserAddressPayload, {rejectWithValue}) => {
    try {
      return await UserAddressAPI.createUserAddress(payload)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const listUserAddress = createAsyncThunk("userAddress/listUserAddress", async () => {
  try {
    return await UserAddressAPI.listUserAddress()
  } catch (error) {
    // return rejectWithValue(error);
  }
})

export const updateUserAddress = createAsyncThunk(
  "userAddress/updateUserAddress",
  async (payload: UpdateUserAddressPayload, {rejectWithValue}) => {
    try {
      return await UserAddressAPI.updateUserAddress(payload)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteUserAddress = createAsyncThunk(
  "userAddress/deleteUserAddress",
  async (payload: DeleteUserAddressPayload, {rejectWithValue}) => {
    try {
      return await UserAddressAPI.deleteUserAddress(payload)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const userAddressSlice = createSlice({
  name: "userAddress",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createUserAddress.fulfilled, (state, action) => {
        state.status = "succeeded"
      })
      .addCase(createUserAddress.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })

      .addCase(listUserAddress.pending, state => {
        state.status = "loading"
      })
      .addCase(listUserAddress.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.userAddresses = action.payload
      })
      .addCase(listUserAddress.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })

      .addCase(updateUserAddress.fulfilled, (state, action) => {
        state.status = "succeeded"
      })
      .addCase(updateUserAddress.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })

      .addCase(deleteUserAddress.fulfilled, (state, action) => {
        state.status = "succeeded"
      })
      .addCase(deleteUserAddress.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export default userAddressSlice.reducer

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

import * as BusinessClientAPI from "./businessClientAPI"

export type BusinessClient = {
  businessClientId: number
  firstName: string
  lastName: string
  fullName: string
  email: string
  mobile: string
  gender: string
  pinCode: string
  address: string
  city: string
  state: string
  country: string
  profilePhoto: string
  isActive: boolean
  status: boolean
}

export type CreateBusinessClientPayload = {
  firstName: string
  lastName: string
  email: string
  mobile: string
} & Partial<
  Omit<BusinessClient, "businessClientId" | "firstName" | "lastName" | "email" | "mobile">
>

export type UpdateBusinessClientPayload = {
  businessClientId: number
} & Partial<Omit<BusinessClient, "businessClientId">>

export type DeleteBusinessClientPayload = {
  businessClientIds: number[]
}

interface BusinessClientState {
  businessClients: BusinessClient[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: BusinessClientState = {
  businessClients: [],
  status: "idle",
  error: null,
}

export const createBusinessClient = createAsyncThunk(
  "businessClient/createBusinessClient",
  async (payload: CreateBusinessClientPayload, {rejectWithValue}) => {
    try {
      return await BusinessClientAPI.createBusinessClient(payload)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const listBusinessClient = createAsyncThunk(
  "businessClient/listBusinessClient",
  async () => {
    try {
      return await BusinessClientAPI.listBusinessClient()
    } catch (error) {
      // return rejectWithValue(error);
    }
  }
)

export const updateBusinessClient = createAsyncThunk(
  "businessClient/updateBusinessClient",
  async (payload: UpdateBusinessClientPayload) => {
    return await BusinessClientAPI.updateBusinessClient(payload)
  }
)

export const deleteBusinessClient = createAsyncThunk(
  "businessClient/deleteBusinessClient",
  async (payload: DeleteBusinessClientPayload, {rejectWithValue}) => {
    try {
      return await BusinessClientAPI.deleteBusinessClient(payload)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const businessClientSlice = createSlice({
  name: "businessClient",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createBusinessClient.fulfilled, (state, action) => {
        state.status = "succeeded"
      })
      .addCase(createBusinessClient.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })

      .addCase(listBusinessClient.pending, state => {
        state.status = "loading"
      })
      .addCase(listBusinessClient.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.businessClients = action.payload
      })
      .addCase(listBusinessClient.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })

      .addCase(updateBusinessClient.fulfilled, (state, action) => {
        state.status = "succeeded"
      })
      .addCase(updateBusinessClient.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })

      .addCase(deleteBusinessClient.fulfilled, (state, action) => {
        state.status = "succeeded"
      })
      .addCase(deleteBusinessClient.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export default businessClientSlice.reducer

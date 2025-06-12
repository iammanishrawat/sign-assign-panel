import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

import * as OrderAPI from "./orderAPI"
import type {User} from "../user/userSlice"

export type OrderStatus = "pending" | "delivered"
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded"

export type Order = {
  orderId: number
  userId: number
  user: User
  createdFor: number
  referenceNumber?: string | null
  amount: number
  amountDetails?: any
  orderStatus: OrderStatus
  paymentStatus: PaymentStatus
  status: boolean
  createdAt: Date
  updatedAt?: Date | null
  deletedAt?: Date | null
  createdBy?: User | null
  updatedBy?: User | null
  deletedBy?: User | null
  createdById?: number | null
  updatedById?: number | null
  deletedById?: number | null
  orderProducts: OrderProduct[]
  transaction: Transaction
}

export type OrderProduct = {
  orderProductId: number
  orderId: number
  order: Order
  productId: number
  product: Product
  dataJson: any
  status: boolean
  createdAt: Date
  updatedAt?: Date | null
  deletedAt?: Date | null
  createdBy?: User | null
  updatedBy?: User | null
  deletedBy?: User | null
  createdById?: number | null
  updatedById?: number | null
  deletedById?: number | null
}

export type Transaction = {
  transactionId: number
  orderId: number
  order: Order
  requestDataJson: any
  responseDataJson?: any | null
  status: boolean
  createdAt: Date
  updatedAt?: Date | null
  deletedAt?: Date | null
  createdBy?: User | null
  updatedBy?: User | null
  deletedBy?: User | null
  createdById?: number | null
  updatedById?: number | null
  deletedById?: number | null
}

export type Product = {
  productId: number
  name: string
  price: number
  productMedias: ProductMedia[]
}

export type ProductMedia = {
  productMediaId: number
  productId: number
  name: string
  mediaType: string
  mediaUrl: string
  size: string
  sequenceNumber: number
}

export type UpdateOrderPayload = {
  orderId: number
} & Partial<Omit<Order, "orderId">>

interface OrderState {
  orders: Order[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: OrderState = {
  orders: [],
  status: "idle",
  error: null,
}

export const listOrder = createAsyncThunk("order/listOrder", async () => {
  try {
    return await OrderAPI.listOrder()
  } catch (error) {
    // return rejectWithValue(error);
  }
})

export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async (payload: UpdateOrderPayload, {rejectWithValue}) => {
    try {
      return await OrderAPI.updateOrder(payload)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(listOrder.pending, state => {
        state.status = "loading"
      })
      .addCase(listOrder.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.orders = action.payload
      })
      .addCase(listOrder.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })

      .addCase(updateOrder.fulfilled, (state, action) => {
        state.status = "succeeded"
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export default orderSlice.reducer

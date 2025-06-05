import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

import * as ProductCategoryAPI from "./productCategoryAPI"

export type ProductSubCategory = {
  productSubCategoryId: number
  name: string
}

export type ProductCategory = {
  productCategoryId: number
  name: string
  productSubCategories: ProductSubCategory[]
}

export type ListProductCategoryPayload = Partial<{
  filter: any
  range: any
  sort: any
  linkedEntities: boolean
}>

interface ProductCategoryState {
  productCategories: ProductCategory[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: ProductCategoryState = {
  productCategories: [],
  status: "idle",
  error: null,
}

export const listProductCategory = createAsyncThunk(
  "productCategory/listProductCategory",
  async () => {
    try {
      return await ProductCategoryAPI.listProductCategory({
        filter: {
          status: true,
        },
        range: {
          all: true,
        },
        sort: [
          {
            orderBy: "name",
            orderDir: "asc",
          },
        ],
        linkedEntities: true,
      })
    } catch (error) {
      // return rejectWithValue(error);
    }
  }
)

const productCategorySlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(listProductCategory.pending, state => {
        state.status = "loading"
      })
      .addCase(listProductCategory.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.productCategories = action.payload
      })
      .addCase(listProductCategory.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export default productCategorySlice.reducer

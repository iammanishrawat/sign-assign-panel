import {configureStore} from "@reduxjs/toolkit"

import authReducer from "../features/auth/authSlice"
import userReducer from "../features/user/userSlice"
import userAddressReducer from "../features/user-address/userAddressSlice"
import businessClientReducer from "../features/business-client/businessClientSlice"
import productCategoryReducer from "../features/product-category/productCategorySlice"
import orderReducer from "../features/order/orderSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    userAddress: userAddressReducer,
    businessClient: businessClientReducer,
    productCategory: productCategoryReducer,
    order: orderReducer,
  },
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

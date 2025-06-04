import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';
import userAddressReducer from '../features/user-address/userAddressSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    userAddress: userAddressReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

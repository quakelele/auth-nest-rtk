import { configureStore } from "@reduxjs/toolkit";
import { LoginApi } from "app/shared/api/LoginApi";
import { RegisterApi } from "app/shared/api/RegisterApi";
import  userReducer  from 'app/shared/api/UserSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [RegisterApi.reducerPath]: RegisterApi.reducer,
    [LoginApi.reducerPath]: LoginApi.reducer,
 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(RegisterApi.middleware)
      .concat(LoginApi.middleware)
     
});
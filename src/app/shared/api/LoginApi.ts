import { API_URL } from "app/shared/config/api";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersType } from "app/shared/config/__types";

export const LoginApi = createApi({
  reducerPath: "LoginApi",
  tagTypes: ["Users"],

  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (build) => ({
    loginUser: build.mutation<UsersType, unknown>({
      query(body) {
        return {
          url: "auth/login",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    updateFavorites: build.mutation<void, any>({
      query(payload) {
        console.log("payload",payload)
        return {
          url: "user/favorites",
          method: "PATCH",
          body: payload,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('acessToken')}`
          }
          
        };
        
      },
      // invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
    
  
  }),
});

export const { useLoginUserMutation, useUpdateFavoritesMutation } = LoginApi;

// GET USERS
  // checkUserAuth: build.query<UsersType[], unknown>({
  //     query: () => "user",
  //     // providesTags: [{ type: "Users", id: "LIST" }],
  //   }),
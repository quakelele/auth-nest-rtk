import { API_URL } from "app/shared/config/api";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersType } from "app/shared/config/__types";

export const RegisterApi = createApi({
  reducerPath: "RegisterApi",
  tagTypes: ["Users"],

  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}auth/` }),
  endpoints: (build) => ({
    registerUser: build.mutation<UsersType, unknown>({
      query(body) {
        return {
          url: "register",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    // // GET USERS
    // checkUserAuth: build.query<UsersType[], unknown>({
    //   query: () => "users",
    //   providesTags: [{ type: "Users", id: "LIST" }],
    // }),
  }),
});

export const { useRegisterUserMutation } = RegisterApi;

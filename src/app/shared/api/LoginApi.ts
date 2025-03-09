import { API_URL } from 'app/shared/config/api'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType ,RootState} from 'app/shared/config/__types'
import { setLogin } from './UserSlice'

export const LoginApi = createApi({
   reducerPath: 'LoginApi',
   tagTypes: ['Users'],

   baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
   endpoints: build => ({
      loginUser: build.mutation<UserType, unknown>({
         query(body) {
            return {
               url: 'auth/login',
               method: 'POST',
               body,
            }
         },
         transformResponse: (response:RootState) => {
      
            localStorage.setItem('acessToken', response.acessToken)
            return response.user ?? {} as UserType
         },
         async onQueryStarted(_, { dispatch, queryFulfilled }) {
            const { data: user } = await queryFulfilled
            
            dispatch(setLogin(user))
         },
      }),

      updateFavorites: build.mutation<void, unknown>({
         query(payload) {
                     return {
               url: 'user/favorites',
               method: 'PATCH',
               body: payload,
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('acessToken')}`,
               },
            }
         },
      }),
   }),
})

export const { useLoginUserMutation, useUpdateFavoritesMutation } = LoginApi

// GET USERS
// checkUserAuth: build.query<UsersType[], unknown>({
//     query: () => "user",
//     // providesTags: [{ type: "Users", id: "LIST" }],
//   }),   // invalidatesTags: [{ type: "Cart", id: "LIST" }],

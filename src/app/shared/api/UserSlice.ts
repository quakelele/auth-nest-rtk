import { createSlice } from '@reduxjs/toolkit'
import { UserState } from 'app/shared/config/__types'

const initialState: UserState = {
   user: null
//    user: JSON.parse(localStorage.getItem('user') || 'null'), // Загружаем пользователя из localStorage
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      login: (state, action) => {
         state.user = action.payload
      },
      logout: state => {
         state.user = null
      },
   },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import {  UserWithoutAccessToken } from '../config/__types'

const initialState:UserWithoutAccessToken= {
   user: JSON.parse(localStorage.getItem('user') || 'null'), 
}
const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setLogin: (state, action) => {
         state.user = action.payload
         console.log(state.user)
      },
      setLogout: state => {
         state.user = null
      },
   },
})

export const { setLogin, setLogout } = userSlice.actions

export default userSlice.reducer

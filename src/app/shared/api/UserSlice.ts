import { createSlice } from '@reduxjs/toolkit'
   
const initialState= {
   user: JSON.parse(localStorage.getItem('user') || 'null'), 
}
const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setLogin: (state, action) => {
         state.user = action.payload

      },
      setLogout: state => {
         state.user = null
         localStorage.removeItem('user')
      },
   },
})

export const { setLogin, setLogout } = userSlice.actions

export default userSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
    
}

const slice = createSlice({
    name: 'users',
    initialState
})

export const authReducer = slice.reducer;
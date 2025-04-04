import { createSlice } from "@reduxjs/toolkit"
import { register } from "./operations"

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
    
}

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.isLoggedIn = true
            state.token = action.payload.token
        })
    }
})

export const authReducer = slice.reducer
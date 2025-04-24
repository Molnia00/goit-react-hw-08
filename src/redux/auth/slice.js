import { createSlice } from "@reduxjs/toolkit"
import { login, logout, refreshThunk, register } from "./operations"

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
    isRefreshing: false,
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
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.isLoggedIn = true
            state.token = action.payload.token
        })
        
        .addCase(logout.fulfilled, () => {
            return initialState
        })

        .addCase(refreshThunk.fulfilled, (state, action) => {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshThunk.pending, (state, action) => {
            state.isRefreshing = true;

        })
        .addCase(refreshThunk.rejected, (state, action) => {
            state.isRefreshing = false;
            
        })
    }
})

export const authReducer = slice.reducer
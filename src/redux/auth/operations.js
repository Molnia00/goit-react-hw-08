import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';
const setAuthHeaders = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

export const register = createAsyncThunk('auth/register',
    async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('users/signup', credentials);
        setAuthHeaders(data.token)
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    });


export const login = createAsyncThunk('auth/login',
    async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('users/login', credentials);
         setAuthHeaders(data.token)
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    });



export const logout = createAsyncThunk('auth/logout',
    async (_, thunkAPI) => {
    try {
        const { data } = await axios.post('users/logout' );
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    });
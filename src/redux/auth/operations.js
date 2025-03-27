import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';


export const register = createAsyncThunk('auth/register',
    async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('users/singup', credentials);
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
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    });
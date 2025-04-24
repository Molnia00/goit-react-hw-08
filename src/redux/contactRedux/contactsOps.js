import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const urlApi = axios.create({
    baseURL : 'https://connections-api.goit.global/'
})

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (body, thunkAPI) => {
    try {
        const { data } = await urlApi.get('/contacts');
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    });



export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
        const { data } = await urlApi.delete(`/contacts/${contactId}`);
            return data;
            
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    }
)   

export const addContact = createAsyncThunk('contacts/addContact',
    async (body, thunkAPI) => {
        try {
        const { data } = await urlApi.post('contacts', body);
            return data;
            
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    }
)   


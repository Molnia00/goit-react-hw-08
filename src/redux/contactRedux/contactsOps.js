import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthHeaders } from "../auth/operations";




export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (body, thunkAPI) => {
            const savedToken = thunkAPI.getState().contacts.token;
        console.log(savedToken)
        if (savedToken === "") {
            return thunkAPI.rejectWithValue('Token is not exist')
        }
        setAuthHeaders(savedToken)
    try {
        const { data } = await axios.get('/contacts');
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    });



export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
        const { data } = await axios.delete(`/contacts/${contactId}`);
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
        const { data } = await axios.post('contacts', body);
            return data;
            
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    }
)   


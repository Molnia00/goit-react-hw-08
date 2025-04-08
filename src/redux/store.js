import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { contactsReducers } from "./contactRedux/contactsSlice";
import { contactsFilterReducers } from "./contactRedux/filtersSlice";


export const store = configureStore({
    reducer: {

    contacts: contactsReducers,
    contactsFilter: contactsFilterReducers,
      auth: authReducer,
  },

    
});
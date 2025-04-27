import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { contactsReducers } from "./contacts/slice";
import { contactsFilterReducers } from "./filter/slice";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'auth-data',
    whitelist: ['token'],
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)


  


export const store = configureStore({
    reducer: {

    contacts: contactsReducers,
    contactsFilter: contactsFilterReducers,
      auth: persistedReducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

    
});

export const persistor = persistStore(store)
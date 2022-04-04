import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/contactsCollection/ContactsSlice';
import headerReducer from '../features/header/headerSlice';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    header: headerReducer
  },
  middleware: [thunk, logger],
  devTools: true,
});

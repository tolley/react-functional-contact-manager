import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/contactsCollection/ContactsSlice';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware: [thunk, logger],
  devTools: true,
});

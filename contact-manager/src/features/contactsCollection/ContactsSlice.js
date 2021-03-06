import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './ContactsCollectionAPI';
import _ from 'lodash';

const initialState = {
  contacts: [],
  displayMode: 'card',
  loading: true,
};

// Load our contacts initially
export const read = createAsyncThunk(
  'contacts/read',
  async (thunkAPI) => {
    const res = await fetchContacts();
    return res.data;
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    create: (state, action) => {
      // action.payload
    },
    update: (state, action) => {
      // action.payload
    },
    remove: (state, action) => {
      // The payload is the id of the contact to remove
      _.remove(state.contacts, contact => contact.id === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(read.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
    })
  }
  
});

export const { create, update, remove } = contactsSlice.actions;

export default contactsSlice.reducer;

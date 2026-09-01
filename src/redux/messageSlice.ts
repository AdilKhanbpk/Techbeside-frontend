import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  createdAt: string;
}

interface MessageState {
  messages: Contact[];
}

const initialState: MessageState = {
  messages: [],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Contact[]>) => {
      state.messages = action.payload;
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.messages = state.messages.filter(contact => contact._id !== action.payload);
    },
  },
});

export const { setMessages, removeContact } = messageSlice.actions;
export default messageSlice.reducer;

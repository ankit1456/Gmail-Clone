import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageOpen: false,
    selectedMail: null,
  },

  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMail } =
  mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;

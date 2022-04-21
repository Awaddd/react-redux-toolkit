import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editModal: {
    isActive: false,
  },
  notification: {
    isActive: false,
    status: "",
    message: "",
  },
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    showEditModal: (state, data) => {
      state.editModal.isActive = true;
      state.editModal.id = data.payload;
    },
    hideEditModal: (state) => {
      state.editModal.isActive = false;
    },
    showNotification: (state, data) => {
      state.notification.isActive = true;
      state.notification.status = data.payload.status;
      state.notification.message = data.payload.message;
    },
    hideNotification: (state) => {
      state.notification.isActive = false;
      state.notification.status = "";
      state.notification.message = "";
    },
  },
});

export const {
  showEditModal,
  hideEditModal,
  showNotification,
  hideNotification,
} = globalSlice.actions;

export default globalSlice.reducer;

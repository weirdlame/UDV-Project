import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clickCount: 0,
  isPopupVisible: false,
  maxFreeClicks: 3,
};

const attemptSlice = createSlice({
  name: "attempts",
  initialState,
  reducers: {
    incClickCount: (state) => {
      if (state.clickCount < state.maxFreeClicks) {
        state.clickCount += 1;
      } else {
        state.isPopupVisible = true;
      }
    },

    resetClickCount: (state) => {
      state.clickCount = 0;
      state.isPopupVisible = false;
    },

    togglePopUp: (state) => {
      state.isPopupVisible = !state.isPopupVisible;
    },
  },
});

export const {
  incClickCount,
  resetClickCount,
  closePopup,
  openPopup,
  togglePopup,
} = attemptSlice.actions;
export default attemptSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  getProfile,
  updateProfile,
  deleteAccount,
  logoutUser,
} from "./profileThunk";

const initialState = {
  profile: null,

  loading: false,

  success: false,

  error: null,
};

const profileSlice = createSlice({
  name: "profile",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Get Profile

      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })

      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;

        state.profile = action.payload;
      })

      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })

      // Update Profile

      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;

        state.success = true;

      state.profile = {
  ...state.profile,
  ...action.payload,
};
      })

      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })

      // Delete Account

      .addCase(deleteAccount.fulfilled, (state) => {
        state.profile = null;
      })

      // Logout

      .addCase(logoutUser.fulfilled, (state) => {
        state.profile = null;
      });
  },
});

export default profileSlice.reducer;
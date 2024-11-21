import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk } from "./thunk";
import useStorage from "../../hooks/useStorage";

const initialState = {
  token: null,
  profile: {},
  invalidLogin: false,
  isUnverified: false,
  validation: {
    email: null,
    password: null,
  },
  serverStatus: null,
  isSubmitting: false,
};

export const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetValidation: (state) => {
      state.invalidLogin = false;
      state.validation.email = null;
      state.validation.password = null;
    },
    resetUnverified: (state) => {
      state.isUnverified = !state.isUnverified;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.isSubmitting = true;
    });

    builder.addCase(loginThunk.fulfilled, (state, action) => {
      // state.isSubmitting = false
      const { data } = action.payload;
      if (data?.email_verified) {
        useStorage().set(data);
        state.profile = data;
        if (data?.group_id === null) {
          window.open("/need/group", "_self");
        } else {
          window.open("/dashboard", "_self");
        }
      } else {
        state.isUnverified = true;
        // window.open('/verify/email','_self')
      }
      state.isSubmitting = false;
    });

    builder.addCase(loginThunk.rejected, (state, action) => {
      state.isSubmitting = false;
      const {
        status,
        data: { data },
      } = action.payload;
      state.serverStatus = status;
      if (status === 422) {
        state.validation.email = data.email?.[0] || null;
        state.validation.password = data.password?.[0] || null;
      }
      if (status === 401) {
        state.invalidLogin = true;
      }
    });

    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      // const { data, message } = action.payload
      useStorage().reset();
      window.open("/", "_self");
    });

    builder.addCase(logoutThunk.rejected, (state, action) => {
      // const { status, data: { data } } = action.payload
    });
  },
});

export const { resetValidation, resetUnverified } = slice.actions;

export default slice.reducer;

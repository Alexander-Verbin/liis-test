import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";
import { getStorageAuth, setStorageAuth } from "./utils";

const initialState = {
 isAuth: getStorageAuth(),
}

export const authSlice = createSlice({
 name:'auth',
 initialState,
 reducers:{
  setAuth: (state,action:PayloadAction<boolean>) => {
   state.isAuth = action.payload;
   setStorageAuth(action.payload);
  }
 }
})

export const {setAuth} = authSlice.actions;

export const getAuthState = (state:RootState) => state.auth.isAuth;

export default authSlice.reducer;
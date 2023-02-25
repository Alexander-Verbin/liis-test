import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";

type initialStateType = {
	cityName: string
	checkIn: null | string
	checkOut: null | string
	days: number
}

const initialState:initialStateType = {
	cityName: "Moscow",
	checkIn: null,
	checkOut: null,
	days: 1
}

export const filterSlice = createSlice({
	name:'filter',
	initialState,
	reducers:{
		setFilterData: (state,action:PayloadAction<initialStateType>) => {
			state.cityName = action.payload.cityName;
			state.checkIn = action.payload.checkIn;
			state.checkOut = action.payload.checkOut;
			state.days = action.payload.days;
		},
	}
})

export const {setFilterData} = filterSlice.actions;


export const getFilterCityName = (state:RootState) => state.filter.cityName;
export const getFilterCheckIn = (state:RootState) => state.filter.checkIn;
export const getFilterDays = (state:RootState) => state.filter.days;
export default filterSlice.reducer;


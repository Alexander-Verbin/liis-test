import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";

export type initialStateHotelsType = {
	hotelId: null | number
	hotelName: null | string
	stars: null | number
	priceFrom:  number
}
type initialStateType = {
 hotels: initialStateHotelsType[]
}

const initialState:initialStateType = {
	hotels: []
}

export const hotelsSlice = createSlice({
	name:'hotels',
	initialState,
	reducers:{
		setHotels: (state,action:PayloadAction<initialStateHotelsType[]>) => {
			state.hotels = action.payload;
		},
	}
})

export const {setHotels} = hotelsSlice.actions;


export const getHotels = (state:RootState) => state.hotels.hotels;

export default hotelsSlice.reducer;


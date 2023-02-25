import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";

export type initialStateHotelsType = {
	hotelId: null | number
	hotelName: null | string
	stars: null | number
	priceFrom:  number
}

const initialState:initialStateHotelsType = {
	hotelId: null,
	hotelName: null,
	stars: null,
	priceFrom: 0,
}

export const hotelSlice = createSlice({
	name:'hotel',
	initialState,
	reducers:{
		setHotelData: (state,action:PayloadAction<initialStateHotelsType>) => {
			state.hotelId = action.payload.hotelId;
			state.hotelName = action.payload.hotelName;
			state.stars = action.payload.stars;
			state.priceFrom = action.payload.priceFrom;
		},
	}
})

export const {setHotelData} = hotelSlice.actions;

export const getHotelData = (state:RootState) => {
	return({
		hotelId: state.hotel.hotelId,
		hotelName: state.hotel.hotelName,
		stars: state.hotel.stars,
		priceFrom: state.hotel.priceFrom,
	})
}
 export default hotelSlice.reducer;


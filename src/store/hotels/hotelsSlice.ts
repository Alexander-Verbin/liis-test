import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";
import {initialStateHotelsType} from "../hotel/hotelSlice";

type initialStateType = {
 hotels: Array<initialStateHotelsType>
}

const initialState:initialStateType = {
	hotels: []
}

export const hotelsSlice = createSlice({
	name:'hotels',
	initialState,
	reducers:{
		setFilterData: (state,action:PayloadAction<initialStateType>) => {
			state.hotels = action.payload.hotels;
		},
	}
})

//export const {setHotels} = hotelsSlice.actions;


export const getHotels = (state:RootState) => state.hotels.hotels;

export default hotelsSlice.reducer;


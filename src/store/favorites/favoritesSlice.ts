import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";
import {initialStateHotelsType} from "../hotels/hotelsSlice";

type initialStateType = {
	favorites: initialStateHotelsType[]
}

const initialState:initialStateType = {
	favorites: []
}

export const hotelsSlice = createSlice({
	name:'favorites',
	initialState,
	reducers:{
		setFavorites: (state,action:PayloadAction<initialStateHotelsType[]>) => {
			state.favorites = action.payload;
		},
	}
})

export const {setFavorites} = hotelsSlice.actions;


export const getFavorites = (state:RootState) => state.favorites.favorites;

export default hotelsSlice.reducer;


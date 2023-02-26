import {configureStore} from '@reduxjs/toolkit'
import auth from './auth/authSlice';
import filter from './filter/filterSlice';
import hotels from './hotels/hotelsSlice';
import favorites from './favorites/favoritesSlice';
export const store = configureStore({
	reducer: {
		auth,
		filter,
		hotels,
		favorites
	},
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
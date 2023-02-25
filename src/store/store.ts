import {configureStore} from '@reduxjs/toolkit'
import auth from './auth/authSlice';
import filter from './filter/filterSlice';
import hotel from './hotel/hotelSlice';
import hotels from './hotels/hotelsSlice';
export const store = configureStore({
	reducer: {
		auth,
		filter,
		hotel,
		hotels
	},
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
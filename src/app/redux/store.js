import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './example/counter';

export const store = configureStore({
	reducer: {
		counter: counterSlice,
	},
});

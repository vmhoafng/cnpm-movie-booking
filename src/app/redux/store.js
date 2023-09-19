import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './example/counter';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

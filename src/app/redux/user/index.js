import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
	isAuthenticated: false,
};

//create user slice
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

//export user actions

//export user reducer
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
	name: "",
};

const usersSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		handleLogin: (state, action) => {
			state.isLoggedIn = true;
			state.name = action.payload.username;
		},
		handleLogout: (state) => {
			state.isLoggedIn = false;
			state.name = "";
		},
	},
});

export const { handleLogin, handleLogout } = usersSlice.actions;
export default usersSlice.reducer;

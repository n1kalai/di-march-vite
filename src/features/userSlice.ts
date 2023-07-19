import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
	isLoggedIn: boolean;
	name: string;
}

const initialState: UserState = {
	isLoggedIn: false,
	name: "",
};

const usersSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		handleLogin: (state, action: PayloadAction<{ username: string }>) => {
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

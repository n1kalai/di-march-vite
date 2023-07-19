import { configureStore } from "@reduxjs/toolkit";
import cocktailsSlice from "../features/cocktailsSlice";
import usersSlice from "../features/userSlice";
import othersSlice from "../features/otherSlice";

export const store = configureStore({
	reducer: {
		cocktails: cocktailsSlice,
		user: usersSlice,
		others: othersSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

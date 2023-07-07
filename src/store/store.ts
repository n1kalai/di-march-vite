import { configureStore } from "@reduxjs/toolkit";
import cocktailsSlice from "../features/cocktailsSlice";

export const store = configureStore({
	reducer: {
		cocktails: cocktailsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

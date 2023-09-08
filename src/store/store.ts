import { configureStore } from "@reduxjs/toolkit";
import cocktailsSlice from "../features/cocktailsSlice";
import usersSlice from "../features/userSlice";
import othersSlice from "../features/otherSlice";
import productsSlice from "../features/productsSlice";
import categoryProductsSlice from "../features/categoryProductsSlice";

export const store = configureStore({
	reducer: {
		cocktails: cocktailsSlice,
		user: usersSlice,
		others: othersSlice,
		products: productsSlice,
		categoryProducts: categoryProductsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../types/cocktail";

const initialState = {
	data: [],
	isLoading: true,
	isError: false,
};

const cocktailsSlice = createSlice({
	name: "cocktails",
	initialState,
	reducers: {
		addCocktails: (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
			state.isError = false;
		},

		findById: (state, action: { payload?: string; type: string }) => {
			const cocktail = state.data.find(
				(cocktail: Cocktail) => cocktail.idDrink === action.payload
			);

			return cocktail;
		},
	},
});

export const { addCocktails, findById } = cocktailsSlice.actions;
export default cocktailsSlice.reducer;

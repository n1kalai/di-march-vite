import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../types/cocktail";

interface CocktailsState {
	data: Cocktail[];
	isLoading: boolean;
	isError: boolean;
}

const initialState: CocktailsState = {
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
	},
});

export const { addCocktails } = cocktailsSlice.actions;
export default cocktailsSlice.reducer;

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoriesResponse } from "../types/CategoriesResponse";
import { getProducts } from "../service/getProducts";
import { getCategories } from "../service/getCategories";

interface CategoriesType {
	isLoaded: boolean;
	isLoading: boolean;
	data: CategoriesResponse[];
}

const initialState: CategoriesType = {
	isLoaded: false,
	isLoading: true,
	data: [],
};

export const getThunkCategories = createAsyncThunk("products", getCategories);

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		addData: (state, data: PayloadAction<Array<CategoriesResponse>>) => {
			state.isLoaded = true;
			state.isLoading = false;
			state.data = data.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getThunkCategories.fulfilled, (state, action) => {
			state.isLoaded = true;
			state.isLoading = false;
			state.data = [...action.payload];
		});
	},
});

export const { addData } = categoriesSlice.actions;
export default categoriesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../service/getProducts";

type categoryProductsSlice = Record<string, Product[]>;

const initialState: categoryProductsSlice = {};

export const getCategoryProducts = createAsyncThunk(
	"categoryProducts",
	getProducts
);

const categoryProductsSlice = createSlice({
	name: "categoryProducts",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			getCategoryProducts.fulfilled,
			(state, { payload: { data, id } }) => {
				console.log(id);
				if (Array.isArray(data)) {
					state[id] = data;
				}
			}
		);
	},
});

export default categoryProductsSlice.reducer;

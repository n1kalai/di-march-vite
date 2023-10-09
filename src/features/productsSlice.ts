import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../service/getProducts";
import { getProductByIdBase } from "../service/products/getProductById";

type ProductsType = {
	isLoaded: boolean;
	isLoading: boolean;
	isError: boolean;
	progressName?: string;
	data: Record<string, Product>;
};

const initialState: ProductsType = {
	isLoaded: false,
	isLoading: true,
	isError: false,
	data: {},
};

export const getRedProducts = createAsyncThunk(
	"products/getProducts",
	getProducts
);

export const getProductById = createAsyncThunk(
	"products/getProductById",
	getProductByIdBase
);

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},

	extraReducers(builder) {
		builder.addCase(getRedProducts.pending, (state, action) => {
			console.log(state);
			console.log(action);
			state.isLoading = true;
			state.data = { ...state.data };
		});
		builder.addCase(getRedProducts.fulfilled, (state, action) => {
			state.isError = false;
			state.isLoaded = true;
			state.isLoading = false;
			const myObj: Record<string, Product> = {};
			console.log("action", action);
			action.payload.data.forEach((prod) => (myObj[prod.id] = prod));
			state.data = myObj;
		});

		builder.addCase(getProductById.fulfilled, (state, { payload }) => {
			state.data[payload.id] = payload;
		});
	},
});

export default productsSlice.reducer;

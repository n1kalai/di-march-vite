import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/UserType";
import { getCartItems } from "../service/cart/getCartItems";
import { removeCartItemBase } from "../service/cart/removeCartItem";

const initialState: UserType = {
	isLoggedIn: false,
	isLoaded: false,
	email: "",
	exp: 0,
	iat: 0,
	nameid: "",
	nbf: 0,
	role: undefined,
	unique_name: "",
	cartItems: {
		amount: 0,
		isLoading: true,
		isLoaded: false,
		isError: false,
		data: {},
	},
};

// type keyOfState = keyof UserType;

export const getReduxCartItems = createAsyncThunk("cart/items", getCartItems);

export const removeCartItem = createAsyncThunk(
	"cart/remove",
	removeCartItemBase
);

const usersSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		handleLogin: (state, { payload }: PayloadAction<{ payload: UserType }>) => {
			state.isLoggedIn = true;

			for (let key in payload) {
				state[key] = payload[key];
			}
		},
		handleAddProduct(state, action: PayloadAction<Product>) {
			state.cartItems.data[action.payload.id] = action.payload;
			state.cartItems.amount += 1;
		},
		handleLogout: () => {
			localStorage.removeItem("token");
			window.location.href = "/";
		},
		handleRemoveOptimisticProduct(state, action) {
			delete state.cartItems.data[action.payload];
		},
		handleInputChange(state, { payload }) {
			state[payload.name] = payload.value;
		},
	},

	extraReducers(builder) {
		builder.addCase(getReduxCartItems.fulfilled, (state, action) => {
			state.cartItems.isLoaded = true;
			state.cartItems.isLoading = false;
			state.cartItems.isError = false;
			const newObj: any = {};
			let amount = 0;
			action.payload.forEach((product) => {
				newObj[product.id] = product;
				amount += 1;
			});
			state.cartItems.amount = amount;
			state.cartItems.data = newObj;
		});
		builder.addCase(removeCartItem.fulfilled, (state, { payload }) => {
			if (payload) {
				delete state.cartItems.data[payload];
				state.cartItems.amount -= 1;
			}
		});
	},
});

export const {
	handleLogin,
	handleLogout,
	handleAddProduct,
	handleRemoveOptimisticProduct,
	handleInputChange,
} = usersSlice.actions;
export default usersSlice.reducer;

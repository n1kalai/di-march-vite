import { useEffect, useState } from "react";
import { getReduxCartItems } from "../features/userSlice";
import { useAppDispatch, useAppSelector } from "../types/hooks";
import { Box, CircularProgress, Typography } from "@mui/material";

import { ProductsContainer } from "../components/products/ProductsContainer";

const CartPage = () => {
	const dispatch = useAppDispatch();
	const [checked, setCheceked] = useState("");

	const { isError, isLoading, isLoaded, data } = useAppSelector(
		(state) => state.user.cartItems
	);

	useEffect(() => {
		dispatch(getReduxCartItems());
	}, []);

	if (isError) {
		return <Box>Error</Box>;
	}
	if (isLoading) {
		return <CircularProgress />;
	}

	if (isLoaded && Object.keys(data).length === 0) {
		return <Typography component="h1">No data in cart</Typography>;
	}

	return (
		<>
			<ProductsContainer isLoading={isLoading} data={Object.values(data)} />

			<form>
				<input
					placeholder="gela"
					type="checkbox"
					checked={checked === "gela"}
					name="gela"
					onChange={(e) => {
						if (checked === e.target.name) {
							setCheceked("");
						} else {
							setCheceked(e.target.name);
						}
					}}
				/>
				<input
					placeholder="nika"
					type="checkbox"
					name="nika"
					checked={checked === "nika"}
					onChange={(e) => {
						setCheceked(e.target.name);
					}}
				/>
				<input
					placeholder="gio"
					type="checkbox"
					checked={checked === "gio"}
					name="gio"
					onChange={(e) => {
						setCheceked(e.target.name);
					}}
				/>
			</form>
		</>
	);
};

export default CartPage;

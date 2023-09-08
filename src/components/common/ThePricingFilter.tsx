import { Box, Button, TextField } from "@mui/material";
import { getCategoryProducts } from "../../features/categoryProductsSlice";
import { useAppDispatch } from "../../types/hooks";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";

export const ThePricingFilter = () => {
	const dispatch = useAppDispatch();
	const [prices, setPrices] = useState({ PriceFrom: "", PriceTo: "" });
	const { id } = useParams();
	const handleFilterWithPrices = () => {
		dispatch(
			getCategoryProducts({
				query: `CategoryId=${id}&PriceFrom=${prices.PriceFrom}&PriceTo=${prices.PriceTo}`,
				id,
			})
		);
	};

	const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPrices((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Box sx={{ maxWidth: "400px", display: "flex", p: 5, gap: 2 }}>
			<TextField
				label="from"
				name="PriceFrom"
				value={prices.PriceFrom}
				fullWidth
				size="small"
				onChange={handlePriceChange}
			/>
			<TextField
				label="to"
				name="PriceTo"
				value={prices.PriceTo}
				fullWidth
				size="small"
				onChange={handlePriceChange}
			/>
			<Button onClick={handleFilterWithPrices}>Send</Button>
		</Box>
	);
};

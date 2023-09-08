import { useEffect } from "react";

import { Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../types/hooks";
import { getRedProducts } from "../features/productsSlice";
import { ProductsContainer } from "../components/products/ProductsContainer";

const ProductsPage = () => {
	const { data, isLoading } = useAppSelector((state) => state.products);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getRedProducts({}));
	}, []);

	if (!Object.keys(data).length) {
		return <Typography component="h2">Loading ...</Typography>;
	}

	return <ProductsContainer data={Object.values(data)} isLoading={isLoading} />;
};

export default ProductsPage;

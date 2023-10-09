import { useEffect, useState, useMemo } from "react";

import { CircularProgress, Pagination, Stack, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../types/hooks";
import { getRedProducts } from "../features/productsSlice";
import { ProductsContainer } from "../components/products/ProductsContainer";
import { G } from "../components/Gela";

const ProductsPage = () => {
	const { data, isLoading } = useAppSelector((state) => state.products);
	const [page, setPage] = useState(1);
	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getRedProducts({ query: `PageNumber=${page}&PageSize=5` }));
	}, [page]);

	const justValues = useMemo(() => Object.values(data), [isLoading, data]);

	if (!Object.keys(data).length) {
		return <Typography component="h2">Loading ...</Typography>;
	}

	return (
		<>
			<G>
				<ProductsContainer data={justValues} isLoading={isLoading} />
				<Stack>
					<Pagination count={4} page={page} onChange={handleChange} />
					{isLoading && <CircularProgress />}
				</Stack>
			</G>
		</>
	);
};

export default ProductsPage;

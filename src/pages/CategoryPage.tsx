import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../types/hooks";
import { getCategoryProducts } from "../features/categoryProductsSlice";
import { ProductsContainer } from "../components/products/ProductsContainer";
import { ThePricingFilter } from "../components/common/ThePricingFilter";

const CategoryPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const product = useAppSelector(
		(state) => state.categoryProducts[id as string]
	);

	useEffect(() => {
		dispatch(getCategoryProducts({ query: `CategoryId=${id}`, id }));
	}, [id]);

	return (
		<>
			<ThePricingFilter />
			<ProductsContainer data={product} isLoading={!product} />
		</>
	);
};

export default CategoryPage;

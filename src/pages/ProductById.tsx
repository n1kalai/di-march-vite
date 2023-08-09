import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../types/hooks";
import { useEffect } from "react";

import { getProductById } from "../features/productsSlice";

const ProductById = () => {
	const { id = "" } = useParams();
	const dispatch = useAppDispatch();

	const product = useAppSelector((state) => state.products.data[id]);

	useEffect(() => {
		if (!product) {
			dispatch(getProductById(id));
		}
	}, []);

	return (
		<>
			ProductById {id} - {product?.name}
		</>
	);
};

export default ProductById;

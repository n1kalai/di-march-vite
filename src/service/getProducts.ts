import { baseAPI } from "./baseAPI";

export const getProducts = async ({
	query = "",
	id = "",
}): Promise<Product[] | { data: Product[]; id: string }> => {
	const response = await baseAPI.get(`/api/product/products?${query}`);

	if (query) {
		return {
			data: response.data,
			id,
		};
	}

	return response.data;
};

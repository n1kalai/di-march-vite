import { baseAPI } from "./baseAPI";

export const getProducts = async (): Promise<Product[]> => {
	const response = await baseAPI.get("/api/product/products");
	return response.data;
};

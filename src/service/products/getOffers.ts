import { baseAPI } from "../baseAPI";

export const getOffers = async (): Promise<Product[]> => {
	const response = await baseAPI.get(`/api/product/offers`);
	return response.data;
};

import { baseAPI } from "../baseAPI";

export const getMostDemands = async (): Promise<Product[]> => {
	const response = await baseAPI.get("/api/product/mostdemandproducts");
	return response.data;
};

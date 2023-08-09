import { baseAPI } from "../baseAPI";
const token = localStorage.getItem("token");

export const getCartItems = async (): Promise<Product[]> => {
	const response = await baseAPI.get("/api/cart/getmycartproducts", {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
	return response.data;
};

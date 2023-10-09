import { AxiosResponse } from "axios";
import { baseAPI } from "./baseAPI";
import { CategoriesResponse } from "../types/CategoriesResponse";

export const getCategories = async (): Promise<
	AxiosResponse<CategoriesResponse[]>
> => {
	const data = await baseAPI.get("/api/product/categories");
	return data.data;
};

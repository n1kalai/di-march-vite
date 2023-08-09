import { AxiosResponse } from "axios";
import { baseAPI } from "./baseAPI";
import { CategoriesResponse } from "../types/CategoriesResponse";

export const getCategories = (): Promise<
	AxiosResponse<CategoriesResponse[]>
> => {
	return baseAPI.get("/api/product/categories");
};

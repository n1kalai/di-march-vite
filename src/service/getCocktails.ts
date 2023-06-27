import axios from "axios";
import { CocktailsResponse } from "../types/cocktail";
import { useQuery } from "@tanstack/react-query";

export const useCocktails = () => useQuery(["cocktails"], getCocktails);

export const getCocktails = (): Promise<CocktailsResponse> =>
	axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");

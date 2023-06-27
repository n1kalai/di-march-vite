export type Cocktail = {
	idDrink: string;
	strDrink: string;
	strDrinkThumb: string;
	strInstructions: string;
};

export type CocktailsResponse = {
	data: {
		drinks: Cocktail[];
	};
};

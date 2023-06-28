import { useCocktails } from "../service/getCocktails";

export const Cocktails = () => {
	const { isError, isLoading, data } = useCocktails();

	if (isError) {
		return <div>Error</div>;
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	console.log(data);
	return (
		<div>
			<h1>Cocktails</h1>
			{data.data.drinks.map((drink) => (
				<div key={drink.idDrink}>{drink.strDrink}</div>
			))}
		</div>
	);
};

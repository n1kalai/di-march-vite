import { useDispatch, useSelector } from "react-redux";
import { getCocktails, useCocktails } from "../service/getCocktails";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { addCocktails } from "../features/cocktailsSlice";
import { Cocktail } from "../types/cocktail";
import { CocktailsCard } from "../components/cocktails/Card";

export const Cocktails = () => {
	const { data, isError, isLoading } = useSelector(
		(state: RootState) => state.cocktails
	);

	const dispatch = useDispatch();

	useEffect(() => {
		getCocktails().then((res) => {
			dispatch(addCocktails(res.data.drinks));
		});
	}, []);

	if (isError) {
		return <div>Error</div>;
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h5>Cocktails</h5>
			{!data.length ? (
				<div>No data</div>
			) : (
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						gap: 20,
					}}
				>
					{data?.map((drink: Cocktail, index) => (
						<CocktailsCard
							key={drink.idDrink}
							cocktail={drink}
							isSmall={index !== 0}
						/>
					))}
				</div>
			)}
		</div>
	);
};

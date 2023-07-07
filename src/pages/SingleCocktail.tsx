import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCocktails, findById } from "../features/cocktailsSlice";
import { RootState } from "../store/store";
import { Cocktail } from "../types/cocktail";
import { useEffect } from "react";
import { getCocktails } from "../service/getCocktails";

// we should check if there is cocktail with [id] in state,
// if not we should fetch
// after fetching and updating state with dispatch, component will re-render
// and try one more time to get cocktail (useSelector)

export const SingleCocktailPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const cocktail: Cocktail | undefined = useSelector((state: RootState) =>
		state.cocktails.data.find((cock: Cocktail) => cock.idDrink === id)
	);

	console.log(cocktail);

	useEffect(() => {
		if (!cocktail) {
			getCocktails().then((res) => {
				dispatch(addCocktails(res.data.drinks));
			});
		}
	}, []);

	if (!cocktail) {
		return <h1>No data</h1>;
	}

	return (
		<div>
			<h1>{cocktail.strDrink}</h1>
			<Link to="/">home</Link>
		</div>
	);
};

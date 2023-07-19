import { Link, useParams, useLocation } from "react-router-dom";
import { addCocktails } from "../features/cocktailsSlice";

import {
	MutableRefObject,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
	useTransition,
} from "react";
import { getCocktails } from "../service/getCocktails";

import { useAppDispatch, useAppSelector } from "../types/hooks";

// we should check if there is cocktail with [id] in state,
// if not we should fetch
// after fetching and updating state with dispatch, component will re-render
// and try one more time to get cocktail (useSelector)

export const SingleCocktailPage = () => {
	const { id } = useParams();
	const { search } = useLocation();

	console.log(useLocation());
	const [startTransition, isTransitioning] = useTransition();
	const myRef = useRef(5);
	const myElementRef: MutableRefObject<null | HTMLParagraphElement> =
		useRef(null);
	const [number, setNumber] = useState(0);

	const url = new URLSearchParams(search);

	const showPic = url.get("showPic"); // 'true'
	const showDescription = url.get("showDescription"); // 'false'

	const dispatch = useAppDispatch();
	const cocktail = useAppSelector((state) =>
		state.cocktails.data.find((cock) => cock.idDrink === id)
	);

	const math = Math.random(); // 23.1231231

	const useMemoValue = useMemo(() => {
		const newTitle = cocktail?.strInstructions.includes("h")
			? "123456" + cocktail?.strDrink
			: cocktail?.strDrink;

		console.log("is in memo", cocktail);
		return { name: cocktail?.strDrink, alternativeName: newTitle };
	}, [cocktail]);

	const useCallbackValue = useCallback((name: string) => {
		myRef.current++;
		console.log("inner math", math, name);
	}, []);

	useEffect(() => {
		if (!cocktail) {
			getCocktails().then((res) => {
				dispatch(addCocktails(res.data.drinks));
			});
		}
	}, []);

	// const myRefFunction = (node: HTMLElement) => {
	// 	console.log(node.innerText);
	// };

	if (!cocktail) {
		return <h1>No data</h1>;
	}

	return (
		<div>
			<h1
				className={`font-bold md:mx-64 my-[12px] text-[40px] ${
					myElementRef.current ? "text-blue-250" : "text-pink"
				}`}
			>
				{useMemoValue.name} - {useMemoValue.alternativeName}
			</h1>
			<h2 className="text-[40px]">{number}</h2>

			<button
				className="bg-blue-450 text-[55px] px-8"
				onClick={() => useCallbackValue("gela")}
			>
				show log
			</button>
			<button onClick={() => setNumber((p) => p + 1)}>+1</button>
			{showPic === "true" && <img src={cocktail.strDrinkThumb} />}
			<br />
			{showDescription === "true" && (
				<p ref={myElementRef}>{cocktail.strInstructions} </p>
			)}
			<Link to="/">home</Link>
		</div>
	);
};

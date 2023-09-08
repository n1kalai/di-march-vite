import {
	ChangeEvent,
	Dispatch,
	startTransition,
	useEffect,
	useState,
	useTransition,
} from "react";
import axios, { AxiosResponse } from "axios";
import { Cocktail } from "../types/cocktail";
import { CocktailsCard } from "../components/cocktails/Card";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCocktails } from "../service/getCocktails";
import {
	Box,
	Button,
	Grid,
	InputAdornment,
	LinearProgress,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import MediaCard from "../components/MuiCard";

import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { store } from "../store/store";
import { getRedProducts } from "../features/productsSlice";
import { useAppDispatch, useAppSelector } from "../types/hooks";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";

const fetchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

let DEBOUNCE: number;

const LiveSearch = () => {
	const [search, setSearch] = useState("");
	const dispatch = useAppDispatch();

	const { t } = useTranslation();

	const prods = useAppSelector((state) => state.products);

	useEffect(() => {
		dispatch(getRedProducts());
	}, []);

	const { data, isError, isLoading, refetch, isFetching } = useQuery(
		["cocktails", search],
		() => getCocktails(search),
		{
			keepPreviousData: true,
		}
	);

	const queryClient = useQueryClient();

	//@ts-ignore
	const inputMutation = useMutation({
		mutationFn: (e) =>
			axios.post(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`
			),
		onSuccess(e) {
			queryClient.setQueryData(["cocktails", search], {
				data: { drinks: e.data.drinks || [] },
			});
		},
		onError() {
			console.log("Error Gelaaaaaa s");
		},
	});

	const [drinks, setDrinks] = useState<{
		isLoading: boolean;
		isLoaded: boolean;
		isError: boolean;
		data: Cocktail[];
	}>({
		isLoading: false,
		isLoaded: false,
		isError: false,
		data: [],
	});

	const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		// @ts-ignore
		// inputMutation.mutate(value);

		// if (DEBOUNCE) {
		// 	clearTimeout(DEBOUNCE);
		// }

		// DEBOUNCE = setTimeout(async () => {
		setSearch(value);
		// }, 400);
	};

	if (isError) {
		return <div>error...</div>;
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<Box sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
			<Typography component="h1" sx={{ fontSize: 24 }}>
				Search cocktails {t("sentence", { name: "NIKA" })}
			</Typography>

			<Box component="form">
				<TextField
					id="filled-basic"
					label={t("inputLabel")}
					variant="outlined"
					value={search}
					onChange={handleSearch}
					size="small"
					sx={{ width: 600 }}
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								{isFetching && <CircularProgress size={24} />}
							</InputAdornment>
						),
					}}
				/>
			</Box>

			{drinks.isLoaded && drinks.data.length === 0 && (
				<Typography component="h5">No results</Typography>
			)}
			{drinks.isLoading && <Typography component="h5">loading...</Typography>}
			<Grid
				container
				spacing={5}
				py={5}
				style={{ margin: "0 auto", maxWidth: "100%" }}
				// sx={{ display: "flex", justifyContent: "center" }}
			>
				{data?.data.drinks ? (
					data.data.drinks.map((cocktail) => (
						<Grid item md={4} lg={4} xl={3} key={cocktail.idDrink}>
							<MediaCard cocktail={cocktail} />
						</Grid>
					))
				) : (
					<Box>Nothing found</Box>
				)}
			</Grid>
		</Box>
	);
};

export default LiveSearch;

import { lazy } from "react";

const UserAccount = lazy(() =>
	import("../pages/Account").then((mod) => ({ default: mod.UserAccount }))
);

const SingleCocktailPage = lazy(() =>
	import("../pages/SingleCocktail").then((mod) => ({
		default: mod.SingleCocktailPage,
	}))
);

const Cocktails = lazy(() =>
	import("../pages/Cocktails").then((mod) => ({
		default: mod.Cocktails,
	}))
);

const SliderPage = lazy(() =>
	import("../pages/Slider").then((mod) => ({ default: mod.SliderPage }))
);

export const routes = [
	{
		path: "/",
		Element: Cocktails,
	},
	{
		path: "/cocktails",
		Element: Cocktails,
	},
	{
		path: "/cocktails/:id", // parameter
		Element: SingleCocktailPage,
	},
];

export const protectedRoutes = [
	{
		path: "/swiper",
		Element: SliderPage,
	},
	{
		path: "/account",
		Element: UserAccount,
	},
];

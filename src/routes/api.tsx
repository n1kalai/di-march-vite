import { UserAccount } from "../pages/Account";
import { Cocktails } from "../pages/Cocktails";
import { SingleCocktailPage } from "../pages/SingleCocktail";
import { SliderPage } from "../pages/Slider";

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
		path: "/cocktails/:id",
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

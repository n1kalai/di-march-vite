import { lazy } from "react";

const ProductById = lazy(() => import("../pages/ProductById"));
const CartPage = lazy(() => import("../pages/CartPage"));
const LearningCss = lazy(() => import("../pages/LearningCss"));
const SimpleSlider = lazy(() => import("../pages/SlickSlider"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));

const UserAccount = lazy(() =>
	import("../pages/Account").then((mod) => ({ default: mod.UserAccount }))
);

const SingleCocktailPage = lazy(() =>
	import("../pages/SingleCocktail").then((mod) => ({
		default: mod.SingleCocktailPage,
	}))
);

const LiveSearch = lazy(() => import("../pages/LiveSearch"));

const SliderPage = lazy(() =>
	import("../pages/Slider").then((mod) => ({ default: mod.SliderPage }))
);

const MasteringUseTransition = lazy(
	() => import("../pages/MasteringUseTransition")
);

export const routes = [
	{
		path: "/",
		Element: LiveSearch,
	},
	{
		path: "/slick",
		Element: SimpleSlider,
	},
	{ path: "/products", Element: ProductsPage },
	{ path: "/products/:id", Element: ProductById },

	{
		path: "/cocktails/:id", // parameter
		Element: SingleCocktailPage,
	},
	{
		path: "/learning-css", // parameter
		Element: LearningCss,
	},
	{
		path: "/use-transition", // parameter
		Element: MasteringUseTransition,
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
	{
		path: "/cart",
		Element: CartPage,
	},
	// {
	// 	path: "/account",
	// 	Element: UserAccount,
	// },
];

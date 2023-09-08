import { lazy } from "react";

const AppFormik = lazy(() => import("../pages/AppFormik"));
const RHFComponent = lazy(() => import("../pages/RHFComponent"));
const ProductById = lazy(() => import("../pages/ProductById"));
const CartPage = lazy(() => import("../pages/CartPage"));
const LearningCss = lazy(() => import("../pages/LearningCss"));
const SimpleSlider = lazy(() => import("../pages/SlickSlider"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));

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
const Chat = lazy(() => import("../pages/Chat"));

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
	{ path: "/category/:id", Element: CategoryPage },
	{ path: "/products/:id", Element: ProductById },

	{
		path: "/cocktails/:id", // parameter
		Element: SingleCocktailPage,
	},
	{
		path: "/formik", // parameter
		Element: AppFormik,
	},
	{
		path: "/rhf", // parameter
		Element: RHFComponent,
	},
	{
		path: "/chat", // parameter
		Element: Chat,
	},
	{
		path: "/swiper",
		Element: SliderPage,
	},
];

export const protectedRoutes = [
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

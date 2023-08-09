import { Dispatch, MouseEvent, useEffect, useState } from "react";
import {
	useNavigate,
	NavigateFunction,
	useLocation,
	NavLink,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { handleShowModal } from "../../features/otherSlice";

import "./header.css";
import { CategoriesResponse } from "../../types/CategoriesResponse";
import { getCategories } from "../../service/getCategories";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useAppSelector } from "../../types/hooks";
import { RootState } from "../../store/store";
import { TheProfile } from "./TheProfile";

type onClickTypes = {
	navigate: NavigateFunction;
	user?: any;
	dispatch?: Dispatch<any>;
	event: MouseEvent<HTMLAnchorElement>;
};

const accountMenu = [
	{
		title: "Home",
		link: "/",
		onClick({ navigate }: onClickTypes) {
			navigate(this.link);
		},
	},
	{
		title: "Products",
		link: "/products",
		onClick({ navigate }: onClickTypes) {
			navigate(this.link);
		},
	},
	{
		title: "useTransition",
		link: "/use-transition",
		onClick({ navigate }: onClickTypes) {
			navigate(this.link);
		},
	},
	// {
	// 	title: "Cocktails",
	// 	link: "/cocktails",
	// 	onClick({ navigate }: onClickTypes) {
	// 		navigate(this.link);
	// 	},
	// },
	{
		title: "Account",
		link: "/account",
		onClick({ navigate, user, dispatch, event }: onClickTypes) {
			event.preventDefault();
			if (user.isLoggedIn) {
				return navigate(this.link);
			}

			if (!user.isLoggedIn && dispatch) {
				dispatch(handleShowModal());
			}
		},
	},
	{
		title: "Swiper",
		link: "/swiper",
		onClick({ navigate }: onClickTypes) {
			navigate(this.link);
		},
	},
	{
		title: "Slick-slider",
		link: "/slick",
		onClick({ navigate }: onClickTypes) {
			navigate(this.link);
		},
	},
	{
		title: "Css",
		link: "/learning-css",
		onClick({ navigate }: onClickTypes) {
			navigate(this.link);
		},
	},
	{
		title: "Cart",
		link: "/cart",
		onClick({ navigate }: onClickTypes) {
			navigate(this.link);
		},
	},
];

export const Header = () => {
	const [categories, setCategories] = useState<CategoriesResponse[]>([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	const user = useAppSelector((state) => state.user);

	useEffect(() => {
		getCategories().then((res) => {
			setCategories(res.data);
		});
	}, []);

	return (
		<header>
			<div
				style={{ display: "flex", justifyContent: "space-between" }}
				className="px-5"
			>
				<nav className="sticky top-0 left-0 bg-gray py-2 z-10">
					<ul className="flex gap-2 p-0 mt-0">
						{accountMenu.map((menuItem) => (
							<li
								className="flex p-2 items-center justify-center"
								key={menuItem.title}
								style={{
									backgroundColor:
										menuItem.link === pathname
											? "rebeccapurple"
											: "transparent",
									color: menuItem.link === pathname ? "white" : "black",
								}}
							>
								<NavLink
									onClick={(e) =>
										menuItem.onClick({ navigate, event: e, dispatch, user })
									}
									to={menuItem.link}
								>
									{menuItem.title}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
				<TheProfile />
			</div>
			<nav>
				<List
					sx={{
						display: "flex",
						backgroundColor: (theme) => theme.palette.secondary.dark,
						padding: 0,
					}}
				>
					{categories.map((item) => (
						<ListItem
							sx={{ height: "40px", overflowY: "hidden", px: 1, a: { px: 0 } }}
							key={item.id}
							disablePadding
						>
							<ListItemButton
								component="a"
								href={`/category/${item.id}`}
								sx={{ textAlign: "center" }}
							>
								<ListItemText
									sx={{ span: { fontSize: "0.9em", color: "white" } }}
								>
									{item.name}{" "}
								</ListItemText>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</nav>
		</header>
	);
};

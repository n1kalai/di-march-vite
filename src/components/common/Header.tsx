import { Dispatch, MouseEvent } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { handleShowModal } from "../../features/otherSlice";

type onClickTypes = {
	navigate: NavigateFunction;
	user?: any;
	dispatch?: Dispatch<any>;
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
		title: "Cocktails",
		link: "/cocktails",
		onClick({ navigate }: onClickTypes) {
			navigate(this.link);
		},
	},
	{
		title: "Account",
		link: "/account",
		style: { backgroundColor: "red" },
		onClick({ navigate, user, dispatch }: onClickTypes) {
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
];

export const Header = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.user);
	console.log(user);
	return (
		<nav>
			<ul>
				{accountMenu.map((menuItem) => (
					<li key={menuItem.title}>
						<button
							onClick={() => menuItem.onClick({ navigate, user, dispatch })}
							style={menuItem.style}
						>
							{menuItem.title}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

import { Link, Outlet } from "react-router-dom";

export const SBNGlobal = () => {
	return (
		<main className="flex flex-col w-screen h-[50vh]">
			<header className="h-[70px] w-screen bg-pink">
				<Link className="pr-3" to="user">
					User
				</Link>
				<Link to="profile">Profile</Link>
			</header>
			<div className="flex">
				<aside className="w-3/12 h-[250px] bg-blue-250"></aside>
				<main className="w-6/12 h-[250px] bg-purple ">
					<Outlet />
				</main>
				<section className="w-3/12 h-[250px] bg-blue-650"></section>
			</div>
		</main>
	);
};

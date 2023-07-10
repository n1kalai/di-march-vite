import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

export const ProtectedRoute = () => {
	const user = useSelector((state: RootState) => state.user);

	if (!user.isLoggedIn) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
};

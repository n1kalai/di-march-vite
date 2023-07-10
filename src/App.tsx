import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";

import { protectedRoutes, routes } from "./routes/api";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { Header } from "./components/common/Header";
import { LoginModal } from "./components/common/LoginModal";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<LoginModal />
			<Routes>
				{routes.map(({ path, Element }) => (
					<Route key={path} path={path} element={<Element />} />
				))}

				<Route element={<ProtectedRoute />}>
					{protectedRoutes.map(({ path, Element }) => (
						<Route key={path} path={path} element={<Element />} />
					))}
				</Route>

				<Route path="*" element={<div>Not Found</div>} />
			</Routes>
			<footer></footer>
		</BrowserRouter>
	);
}

export default App;

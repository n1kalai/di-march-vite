import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { protectedRoutes, routes } from "./routes/api";
import { ProtectedRoute } from "./routes/ProtectedRoute";

const Header = lazy(() =>
	import("./components/common/Header").then((mod) => ({ default: mod.Header }))
);

const LoginModal = lazy(() =>
	import("./components/common/LoginModal").then((mod) => ({
		default: mod.LoginModal,
	}))
);

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Header Loading...</div>}>
				<Header />
			</Suspense>
			<Suspense fallback={<div>Login modal Loading...</div>}>
				<LoginModal />
			</Suspense>
			<Suspense
				fallback={
					<div className="relative w-full sm:w-1/2 bg-gray-200 rounded">
						<div
							style={{ width: "100vw" }}
							className="absolute top-0 h-4 rounded shim-red"
						></div>
					</div>
				}
			>
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
			</Suspense>
			<footer></footer>
		</BrowserRouter>
	);
}

export default App;

import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Cocktails } from "./pages/Cocktails";

function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<Link to="/about">Aboyt</Link>
				</header>
				<Routes>
					<Route path="/" element={<div>Home</div>} />
					<Route path="/cocktails" element={<Cocktails />} />
					<Route path="/counter" element={<div>Counter: 0</div>} />
					<Route path="*" element={<div>Not Found</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

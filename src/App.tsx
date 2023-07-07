import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Cocktails } from "./pages/Cocktails";
import "./App.css";
import { SliderPage } from "./pages/Slider";
import { SingleCocktailPage } from "./pages/SingleCocktail";

function App() {
	return (
		<BrowserRouter>
			<header>
				<Link to="/about">About</Link>
			</header>
			<Routes>
				<Route path="/" element={<Cocktails />} />
				<Route path="/cocktails" element={<Cocktails />} />
				<Route path="/cocktails/:id" element={<SingleCocktailPage />} />
				<Route path="/counter" element={<div>Counter: 0</div>} />
				<Route path="/swiper" element={<SliderPage />} />
				<Route path="*" element={<div>Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

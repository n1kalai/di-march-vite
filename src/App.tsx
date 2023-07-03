import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Cocktails } from "./pages/Cocktails";

import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SliderPage } from "./pages/Slider";

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
					<Route path="/swiper" element={<SliderPage />} />
					<Route path="*" element={<div>Not Found</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

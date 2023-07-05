import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Cocktails } from "./pages/Cocktails";

import "./App.css";

import { SliderPage } from "./pages/Slider";
import { HomePage } from "./pages/HomePage";
import { useState } from "react";

function App() {
	const [number, setNumber] = useState(0);
	return (
		<>
			<HomePage count={number} changeNumber={setNumber} />
			<Cocktails />
			{/* <BrowserRouter>
				<header>
					<Link to="/about">About</Link>
				</header>
				<Routes>
					<Route
						path="/"
						element={<HomePage count={number} changeNumber={setNumber} />}
					/>
					<Route path="/cocktails" element={<Cocktails />} />
					<Route path="/counter" element={<div>Counter: 0</div>} />
					<Route path="/swiper" element={<SliderPage />} />
					<Route path="*" element={<div>Not Found</div>} />
				</Routes>
			</BrowserRouter> */}
		</>
	);
}

export default App;

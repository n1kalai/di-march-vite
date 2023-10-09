import { useState } from "react";

export const G = ({ children }) => {
	const [newState, setNewState] = useState(12);
	return (
		<>
			<div
				className="w-[150px] h-[150px]"
				style={{ backgroundColor: newState % 2 === 0 ? "red" : "blue" }}
			></div>
			<button onClick={() => setNewState(newState + 1)}>change</button>
			{children}
		</>
	);
};

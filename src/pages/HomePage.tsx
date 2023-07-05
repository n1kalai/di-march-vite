import { Dispatch, SetStateAction, useState } from "react";

export const HomePage = ({
	count,
	changeNumber,
}: {
	count: number;
	changeNumber: Dispatch<SetStateAction<number>>;
}) => {
	return (
		<>
			<div>count: {count}</div>
			<button onClick={() => changeNumber((prev) => prev + 1)}>
				increment
			</button>
			<button onClick={() => changeNumber((prev) => prev - 1)}>
				decrement
			</button>
		</>
	);
};

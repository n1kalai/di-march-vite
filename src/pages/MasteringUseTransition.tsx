import { ChangeEvent, useState, useTransition } from "react";

const MasteringUseTransition = () => {
	const [inputVal, setInputVal] = useState("");
	const [isTransitioning, startTransition] = useTransition();
	const [items, setItems] = useState([1]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputVal(e.target.value);

		startTransition(() => {
			let itemsArr = [];

			for (let i = 0; i < 20000000; i++) {
				itemsArr.push(i);
			}

			setItems([2]);
		});
	};

	return (
		<div className="p-4 flex flex-col gap-4">
			<h1 className="text-2xl">Vite - useTransition()</h1>
			<form>
				<input
					type="number"
					value={inputVal}
					onChange={handleInputChange}
					placeholder="type something"
					className="p-2 rounded-md w-[400px]"
				/>
			</form>
		</div>
	);
};

export default MasteringUseTransition;

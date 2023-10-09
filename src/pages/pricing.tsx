/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rRBlufM
 */

import { Button } from "@mui/material";
import { DragEvent, useEffect } from "react";

export default function Component() {
	// useEffect(() => {
	// 	document.ondragstart = function (event) {
	// 		event.dataTransfer.setData("Text", event.target.id);
	// 		document.getElementById("demo").innerHTML =
	// 			"Started to drag the p element.";
	// 	};

	// 	/* Events fired on the drop target */
	// 	document.ondragover = function (event) {
	// 		event.preventDefault();
	// 		console.log(event.target.getBoundingClientRect());
	// 	};

	// 	document.ondrop = function (event: DragEvent<HTMLElement>) {
	// 		event.preventDefault();
	// 		var data = event.dataTransfer.getData("Text");
	// 		console.log("daata", data);
	// 		console.log("daata 2 ", event.target.id);
	// 		if (data !== event.target.id) {
	// 			event.target.style.transform = "translateY(400px)";
	// 		}
	// 		event.target.appendChild(document.getElementById(data));
	// 		let elem = document.getElementById("demo");
	// 		if (elem) {
	// 			elem.innerHTML = "The p element was dropped";
	// 		}
	// 		return null;
	// 	};
	// }, []);

	return (
		<div className="flex gap-2 flex-wrap">
			{Array.from({ length: 1000 }, (e, i) => i).map((e, i) => (
				<div
					onClick={(e) => console.log(e.target.getBoundingClientRect())}
					className="w-[200px] border border-solid border-blue-250"
				>
					{" "}
					{i}{" "}
				</div>
			))}
			{/* <p id="demo"></p>
			<div className="flex w-[30%] flex-col">
				<div
					id="1"
					data-place="1"
					draggable
					// onDragStart={(e) => {
					// 	e.dataTransfer.setData("id", "1");
					// }}
					className="w-[100%] h-[400px] border-blue-250 border-solid border-2 items-center justify-center flex"
				>
					1
				</div>
			</div>
			<div
				id="2"
				className="flex w-[30%] flex-col border-orange border-2 border-solid min-h-[90vh]"
				data-gela="div-2"
			>
				<div
					onDragOver={(e) => {
						e.preventDefault();
						e.stopPropagation();

						// e.target.style.transform = "translateY(400px)";
					}}
					onDragEnd={(e) => {
						e.preventDefault();
						e.stopPropagation();
						e.target.style.transform = "translateY(0px)";
					}}
					className="w-[100%] h-[400px] border-pink-500 border-solid border-2 items-center justify-center flex"
				>
					2
				</div>
			</div>
			<div
				id="3"
				// onDrop={(e) => {
				// 	e.preventDefault();
				// 	// console.log("drop event", e);
				// 	// console.log("drop attribute", e.target.dataset.gela);
				// 	const g = e.dataTransfer.getData("id");
				// 	console.log("transfer", g);
				// }}
				data-gela="div-3"
				className="flex w-[30%] flex-col border-orange border-2 border-solid min-h-[90vh]"
			>
				<div className="w-[100%] h-[400px] border-purple-500 border-solid border-2  items-center justify-center flex">
					3
				</div>
			</div> */}
		</div>
	);
}

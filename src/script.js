// closure , currying

const myFunc = (parameter1) => {
	const g = parameter1 + 15 - 20;

	return (parameter2) => {
		console.log("G", g);
		console.log("sum", parameter1 + parameter2);
		return parameter2 + parameter1;
	};
};

const sumFirstNumber = myFunc(5);
const summed = sumFirstNumber(10);

// console.log(summed);

// myFunc()();

// const g = myFunc(1);
// const h = g(5);
// console.log(h);

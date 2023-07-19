console.log("Start");

Promise.resolve().then(() => console.log("Microtask 1 executed"));

setTimeout(() => console.log("Macro-task (setTimeout) executed"), 0);

fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then((response) => response.json())
	.then((data) => console.log("Data fetched:", data));

Promise.resolve().then(() => console.log("Microtask 2 executed"));

console.log("Synchronous code executed");

console.log("End");

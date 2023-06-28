type ObjType = { a: number; b: number; x: number; h?: string };
const gela = "";
const obj: ObjType = {
	a: 1,
	b: 2,
	x: 1,
};

let variable: { a: number } = JSON.parse('{"a":1}');

obj.h = "";

let g: string | number | boolean = "str";

g = false;

const myArr: Array<string | number> = [1, 2, 3, 4, 5, "string"];

const myFn = (obj: ObjType): void => {
	return undefined;
};

const sum = (a: string, b: number) => a + b;

const h: "gela" | "givi" = "givi";

type Obj1 = {
	a: 5 | 6;
};

const switchMode = (mode: "light" | "dark") => {
	// ..
};

// switchMode("lightd")

interface Obj3 extends Obj2 {
	c: string;
	d: string;
}

const obj2: Obj2 = {
	a: 5,
	b: "string",
};

const obj3 = {
	c: "c",
	d: "d",
};

const obj4: Obj3 = {
	...obj2,
	...obj3,
};

type Obj4 = {
	a: 5 | 6;
	b: string;
};

type Obj6 = Obj4 & Obj5;
type Obj7 = Obj4 | Obj5;

const obj5: Obj6 = {
	a: 5,
	b: "string",
	c: "c",
	d: "d",
};

const obj6: Obj7 = {
	a: 5,
	b: "string",
	c: "c",
	d: "d",
};

interface Obj2 {
	a: 5 | 6;
	b: string;
}

type Obj5 = {
	c: string;
	d: string;
};

type Obj8 = {
	a: 5 | 6;
	b: string;
	c: string;
	x?: string;
};

const obj8: Obj8 = {
	a: 5,
	b: "string",
	c: "c",
};

type Obj9 = Omit<Obj8, "b" | "a">;

const obj9: Obj9 = {
	// a: 5,
	c: "c",
};

const obj10: Obj8 = {
	a: 5,
	b: "string",
	c: "c",
};

type Obj10 = Partial<Obj8>;

const obj11: Obj10 = {
	x: "x",
};

type Todo = {
	title: string;
	name: string;
};

const todo: Readonly<Todo> = {
	title: "title",
	name: "nika",
};

// todo.title = "gela";
// todo.name = "ika";

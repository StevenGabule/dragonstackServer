const Dragon = require('./dragon.js');

const foo = new Dragon();

const boom = new Dragon({
	birthdate: new Date().toLocaleDateString('ph'),
	nickname: 'John Boo',
	traits: [{traitType: "backgroundColor", traitValue: 'blue'}]
});

const t1 = new Dragon();
const t2 = new Dragon();
const t3 = new Dragon({
	birthdate: new Date().toLocaleDateString('ph'),
	nickname: "John Wick",
	traits: [{traitType: "backgroundColor", traitValue: 'green'}]
});

setTimeout(() => {
	console.log(t3);
}, 3000);

console.log(foo);
console.log(boom);
console.log(t1);
console.log(t2);


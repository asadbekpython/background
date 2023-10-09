let element = document.querySelector("body");

function Change() {
	let colors = [
	"green", 
	"orange", 
	"red", 
	"blue", 
	"yellow", 
	"purple",
	"pink",
	"brown",
	];

	let index = Math.floor(Math.random() * colors.length);

	element.style.backgroundColor = colors[index - 1];
}
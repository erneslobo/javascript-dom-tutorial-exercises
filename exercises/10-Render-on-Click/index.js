let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let body = document.querySelector("body")
	let elem = document.createElement("div");
	elem.style.background = "yellow";
	elem.innerHTML = "Hello World";
	document.body.appendChild(elem);
	// let t = document.createTextNode("Hello World");

});

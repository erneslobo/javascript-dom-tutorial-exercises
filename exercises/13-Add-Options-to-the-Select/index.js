window.onload = function () {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	// your code here
	
	countries.forEach((country) => {
		let elem = document.createElement("option");
		elem.innerHTML = country;
		elem.setAttribute("value", country);
		document.querySelector("#mySelect").appendChild(elem);
	})

	let select = document.getElementById("mySelect");
	select.addEventListener("change", () => {
		alert(select.value);
		
	})


};



	const Firstname= prompt("First name: ");
	const Lastname= prompt("Last name: ");
	const BirthYear= prompt("Birth year: ");
	
	const year = new Date().getFullYear();
	const age = year - parseInt(BirthYear);
	 
	const text= "Hello "+Firstname+" "+Lastname+"! How does it feel to be " +age+" years old?";

	document.getElementById("show").innerText = text;

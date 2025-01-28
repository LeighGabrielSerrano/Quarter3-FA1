

const agree = confirm("Do you agree to share your personal information in this site?");

	if (agree){
		console.log(
		"Name: "+nickname + "\nHeight: "+HFeet+"'"+HInches+ "\" " +"\nWeight: "+ WPounds+" lbs")
	}
	else{
		console.log("User does not wish to share his/her information.");

	}
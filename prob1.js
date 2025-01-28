	const nickname = "Gabby";
	const HinInches = "60";
	const WKg = "40";
	
	const HFeet = Math.floor (HinInches/12);
	const HInches = HinInches % 12;
	const WPounds = (WKg *  2.205).toFixed(3);
	
	alert( 
	"Name: "+nickname + "\nHeight: "+HFeet+"'"+HInches+ "\" " +"\nWeight: "+ WPounds+" lbs" );
	

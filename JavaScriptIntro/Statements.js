function statments(age) {
	if (age >= 18) { return true;} 
	else if(age < 18) { return false;}
}

//'5', 5 "5"
//Triple equal sign check the same type of variables and then compare
//Double equal sign check only variables
function comparisonNum(a, b) {
	if (a === b) { return true;}
	 else if(a != b){ return false;}
}

statments(18);

function switchStatments(age) {
	
	switch(age)
	{
		case 1: 
		alert("Go home to watch cartoons");
		break;
		case 18: 
		alert("Successfull login");
		break;
		default:

		break;

	}
}

function strings() {
	var str = "  Kiro Miro Gosho Pesho  ";

	str = str.replace(" ", "");
	


	str = str.trim();
	console.log(str);

	strArr = str.split(" ");
	console.log(strArr);

	for (var i = 0; i < strArr.length; i++) {
		
		console.log(strArr[i]);
	}

	stringSpecialCharacters = "kiro miro \"asdasd\" asfasf \\ test\\";
	console.log(stringSpecialCharacters);

	stringToInt = "6";
	intToString = 10;
	sum = parseInt(stringToInt) + intToString;
	console.log(sum);
	
	integerNum  = sum + "";
	console.log(integerNum);
	
	charArr =  ["A", "B", "a", "b" ];

            for (var i = 0; i < charArr.length; i++)
            {
                
             console.log("Charachter " + charArr[i] +  "is: " + charArr[i].charCodeAt(0) );
               
            }
}

function arrays() {
	var numbers = [1, 2, 3 ,4]

	for (var i = 0; i < numbers.length ; i++) {
		console.log(numbers[i]);
	}
}


function matrix() {
	var matrix = [
 [1, 2, 3],
 [4, 5, 6],    
 [7, 8, 9],
];

for(var i = 0; i < matrix.length; i++) {
    var cube = matrix[i];
    for(var j = 0; j < cube.length; j++) {
        display("cube[" + i + "][" + j + "] = " + cube[j]);
    }
}
}
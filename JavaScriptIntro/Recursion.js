function sumOfRecursion(num_of_recursion) {
	if (num_of_recursion == 1) {
			return 1;
		}
	return num_of_recursion + sumOfRecursion(num_of_recursion);
}

//fibonnacci
function  fibonacciReqursion(numberOfRecursion){
	if (numberOfRecursion == 0) { 
		return 0;
	} 
	if(numberOfRecursion == 1){
		return 1;
	}

	return fibonacciReqursion(numberOfRecursion - 1 ) + fibonacciReqursion(numberOfRecursion - 2);
}


console.log(sumOfRecursion(5));
console.log(fibonacciReqursion(numberOfRecursion));


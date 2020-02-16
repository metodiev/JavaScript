function oddEvenSum(input){
    let numbersLength = Number(input.shift());
    let OddNumbersSum = 0;
    let evenNumbersSum = 0;

    for (let index = 1; index <= numbersLength; index++) {
      

        if(index % 2 == 0){
            OddNumbersSum+=Number(input.shift());
        }else{
            evenNumbersSum+=Number(input.shift());
        }
        
    }

    if (OddNumbersSum == evenNumbersSum) {
        console.log("Yes");
        console.log(`Sum = ${evenNumbersSum}`);
    }else{
        console.log("No");
        console.log(`Diff = ${Math.abs(OddNumbersSum - evenNumbersSum)}`)
    }
}


oddEvenSum([4,10,50,60,20]);
oddEvenSum([4,3,5,1,-2]);
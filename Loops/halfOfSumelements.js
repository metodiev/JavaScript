function halfofSumElements(input){
    let n = Number(input.shift());

    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < n; index++) {
        let num = Number(input.shift());
        sum +=num;

        if (num > max) {
            max = num;
        }
    }

    let sumWithoutMaxNumber = sum - max;
    if(max === sumWithoutMaxNumber){
        console.log("Yes");
        console.log("Sum = " + max);
    }else{
        let diff = Math.abs(max - sumWithoutMaxNumber);
        console.log("No");
        console.log("Diff = " + diff);
    }
}

halfofSumElements([7,3,4,1,1,2,12,1]);
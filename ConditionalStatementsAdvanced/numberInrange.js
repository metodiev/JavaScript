function numberInRange(input){
    let number = Number(input.shift());

    if(number >= -100 && number !=0 && number <= 100){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

numberInRange([-25]);
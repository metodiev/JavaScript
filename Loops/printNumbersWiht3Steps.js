function printNumbersWith3Steps(input){

    let number = Number(input.shift());

    for (let index = 1; index <= number; index+=3) {
        console.log(index);
        
    }

}


printNumbersWith3Steps([10]);
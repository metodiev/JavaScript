function evenPowerOf2(input){

    let number = Number(input.shift());
    let counter = 1;
    for (let index = 1; index < number; index++) {
        if(index % 2 == 0){
            let powNumber = Math.pow(counter,2);
            if(counter %2 ==0 || counter == 1){
             console.log(powNumber);
            }
            
            counter++;
        }
        
    }

}


evenPowerOf2([4]);
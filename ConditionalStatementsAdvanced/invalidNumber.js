function invalidNumber(input){
    let number = Number(input.shift());

    if( (number == 0) || (number >= 100 && number <=200)){

    }else{
        console.log("invalid")
    }

}

invalidNumber([150]);
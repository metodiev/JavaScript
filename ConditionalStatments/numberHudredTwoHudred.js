function numberHundreds(input){
    let number = Number(input.shift());

    if(number < 100){
        console.log("Less than 100")
    }
    if(number >= 100 && number <= 200){
        console.log("Between 100 and 200");
    }

    if(number > 200){
        console.log("Greater than 200");
    }

}

numberHundreds([95]);
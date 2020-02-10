function bonusScore(input){
    let number = Number(input.shift());

    let score = 0.0;
    if(number <= 100){
        score =  5;
    }else if(number > 1000){
        score = number * 0.10;
    }else{
        score = number * 0.20;
    }

  
    if(number % 2 == 0){
        score = score + 1;
    }else if(number % 10  == 5){
        score = score +2;
    }

    console.log(score);
    console.log(number + score);

}

bonusScore([2703])
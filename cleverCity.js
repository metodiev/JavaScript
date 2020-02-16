function cleverCity(input){
    let age = Number(input.shift());
    let laundryPrice = Number(input.shift());
    let toyPrice = Number(input.shift());

    let moneyFromBirthdays = 0;
    let increaseMoneyforBirthday = 0;
    let toysNumber = 0;
    for (let index = 1; index <= age; index++) {
        if(index %2 == 0){
            increaseMoneyforBirthday +=10;
            moneyFromBirthdays += increaseMoneyforBirthday;
            moneyFromBirthdays -=1;
        }else{
            toysNumber++;
        }
        
    }

    let toysSum = toysNumber * toyPrice;
    let finalSum = toysSum + moneyFromBirthdays;

    if(laundryPrice <= finalSum){
        console.log(`Yes! ${(finalSum - laundryPrice).toFixed(2)}`);
    }else{
        console.log(`No! ${(laundryPrice - finalSum).toFixed(2)}`);
    }
}


cleverCity([10,170.00,6])

cleverCity([21,1570.98,3]);
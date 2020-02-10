function GodzillaVsKong(input){
    let budget = Number(input.shift());
    let numberOfStatists = Number(input.shift());
    let dressPriceForOnePerson = Number(input.shift());

    let costs = 0;
    let decorSum = budget * 0.10;
    let dressSum = numberOfStatists * dressPriceForOnePerson;

    if (numberOfStatists > 150) {
        dressSum = dressSum - (dressSum * 0.10);
    }
    costs = decorSum + dressSum;

    let rest = budget - costs;

    if (rest < 0) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${Math.abs(rest).toFixed(2)} leva more.`);
    }

    if (rest > 0) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${rest.toFixed(2)} leva left.`);
    }
    

}

GodzillaVsKong([9587.88, 222,55.68]);
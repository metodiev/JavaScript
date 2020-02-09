function charityCampaign(input){
    let charityDays = Number(input.shift());
    let bakersCount = Number(input.shift());
    let cakesCount = Number(input.shift());
    let wafflesCount = Number(input.shift());
    let pancakesCount = Number(input.shift());



    let cakesSum = cakesCount * 45;
    let wafflesSum = wafflesCount * 5.80;
    let pancakesSum = pancakesCount * 3.20;

    let totalSum = (cakesSum + wafflesSum + pancakesSum) * bakersCount;
    let totalSumCompaign = totalSum * charityDays;
    let result = totalSumCompaign - (totalSumCompaign * 0.125);

    console.log(result.toFixed(2));


}


charityCampaign([20,8,14,30,16]);
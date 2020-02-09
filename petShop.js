function petShop(input){

    let dogs = Number(input.shift());
    let otherAnimals = Number(input.shift());

    let dogPrice = dogs * 2.50;
    let otherAnimalsPrice = otherAnimals * 4;
    let finalPrice = dogPrice + otherAnimalsPrice;

    console.log(`${finalPrice.toFixed(2)} lv.`);

}

petShop([5,4]);

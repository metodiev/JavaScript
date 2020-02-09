function yardGreening(input){
    let greeningYards = Number(input.shift());
    let priceBeforeDiscount = greeningYards * 7.61;
    let priceAfterDiscount = priceBeforeDiscount * 0.18;
    let finalPrice = priceBeforeDiscount - priceAfterDiscount;

    console.log(`The final price is: ${finalPrice.toFixed(2)} lv. `);
    console.log(`The discount is: ${priceAfterDiscount.toFixed(2)} lv. `);


}
yardGreening(["135"]);
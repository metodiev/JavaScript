function alchoholMarket(input) {
  let whiskeyPrice = Number(input.shift());
  let beerQuantity = Number(input.shift());
  let wineQuantity = Number(input.shift());
  let rakiyaQuantity = Number(input.shift());
  let whiskyeQuantity = Number(input.shift());

  let rakiyaPrice = 0.5 * whiskeyPrice;
  let winePrice = rakiyaPrice - 0.4 * rakiyaPrice;
  let beerPrice = rakiyaPrice - 0.8 * rakiyaPrice;

  let rakiyaSum = rakiyaPrice * rakiyaQuantity;
  let wineSum = winePrice * wineQuantity;
  let beerSum = beerPrice * beerQuantity;
  let whiskeySUm = whiskeyPrice * whiskyeQuantity;

  let totalSum = rakiyaSum + wineSum + beerSum + whiskeySUm;
  console.log(totalSum.toFixed(2));
}

alchoholMarket([50, 10, 3.5, 6.5, 1]);

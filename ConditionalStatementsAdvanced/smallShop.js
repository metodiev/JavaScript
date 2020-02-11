function smallShop(input) {
  let product = input.shift();
  let city = input.shift();
  let quantity = Number(input.shift());

  var sofia = [
    { key: "coffee", value: 0.5 },
    { key: "water", value: 0.8 },
    { key: "beer", value: 1.20 },
    { key: "sweets", value: 1.45 },
    { key: "peanuts", value: 1.6 }
  ];

  var plovdiv = [
    { key: "coffee", value: 0.4 },
    { key: "water", value: 0.7 },
    { key: "beer", value: 1.15 },
    { key: "sweets", value: 1.30 },
    { key: "peanuts", value: 1.50 }
  ];

  var varna = [
    { key: "coffee", value: 0.45 },
    { key: "water", value: 0.70 },
    { key: "beer", value: 1.10 },
    { key: "sweets", value: 1.35 },
    { key: "peanuts", value: 1.55 }
  ];
  let price = 0;
  switch (city) {
    case "Sofia":
      for (var i = 0; i < sofia.length; i++) {
        if (sofia[i].key == product) {
          price = quantity * Number(sofia[i].value);
         
        }
      }
      break;
    case "Plovdiv":
      for (var i = 0; i < plovdiv.length; i++) {
        if (plovdiv[i].key == product) {
          price = quantity * Number(plovdiv[i].value);
        }
      }
      break;
      case "Varna":
      for (var i = 0; i < varna.length; i++) {
        if (varna[i].key == product) {
          price = quantity * Number(varna[i].value);
        }
      }
      break;

    default:
      break;
  }

  console.log((price));
}

smallShop(["sweets", "Sofia", 2.23]);

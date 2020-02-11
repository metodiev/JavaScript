function fruitShop(input) {
  let fruit = input.shift();
  let weekDay = input.shift();
  let quantity = input.shift();

  var friutPriceWeek = [
    { key: "banana", value: 2.5 },
    { key: "apple", value: 1.2 },
    { key: "orange", value: 0.85 },
    { key: "grapefruit", value: 1.45 },
    { key: "kiwi", value: 2.7 },
    { key: "pineapple", value: 5.5 },
    { key: "grapes", value: 3.85 }
  ];

  var friutPriceWeekend = [
    { key: "banana", value: 2.7 },
    { key: "apple", value: 1.25 },
    { key: "orange", value: 0.9 },
    { key: "grapefruit", value: 1.6 },
    { key: "kiwi", value: 3.0 },
    { key: "pineapple", value: 5.6 },
    { key: "grapes", value: 4.2 }
  ];

  let weekFlag = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let weekendFlag = ["Saturday", "Sunday"];

  let day;

  for (let index = 0; index < weekFlag.length; index++) {
    if (weekDay == weekFlag[index]) {
      day = "weekday";
      break;
    }
  }

  for (let index = 0; index < weekendFlag.length; index++) {
    if (weekDay == weekendFlag[index]) {
      day = "weekend";
      break;
    }
  }

  let errFlag;
  let price = 0;
  switch (day) {
    case "weekday":
      for (let index = 0; index < friutPriceWeek.length; index++) {
        if (fruit == friutPriceWeek[index].key) {
          price = quantity * friutPriceWeek[index].value;
          break;
        }
      }
      break;
    case "weekend":
      for (let index = 0; index < friutPriceWeekend.length; index++) {
        if (fruit == friutPriceWeekend[index].key) {
          price = quantity * friutPriceWeekend[index].value;
          break;
        }
      }
      break;

    default:
      break;
  }

  if (price == 0) {
    console.log("error");
  } else {
    console.log(price.toFixed(2));
  }
}

fruitShop(["kiwi", "Monday", 2.5]);
